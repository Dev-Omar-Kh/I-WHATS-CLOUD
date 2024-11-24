import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import SiteLayout from './Layouts/Site-Layout/SiteLayout';
import Overview from './Pages/Overview/Overview';
import { useTranslation } from 'react-i18next';

const routes = createHashRouter(
    [

        // ====== authentication-routes ====== //

        {path: '/register' , element: <Register />},
        {path: '/login' , element: <Login />},

        // ====== site-routes ====== //

        {path: '/', element: <SiteLayout /> , children: [

            {path: '/' , element: <Overview />}
            
        ]}

    ] , 
    
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true
        }
    }
);

export default function App() {

    const {i18n} = useTranslation();

    useEffect(() => {

        const savedLang = localStorage.getItem('language');

        if(savedLang && i18n.language !== savedLang){
            i18n.changeLanguage(savedLang);
        }

        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

    }, [i18n , i18n.language]);

    return <React.Fragment>

        <RouterProvider router={routes} future={{v7_startTransition: true}} />

    </React.Fragment>

}
