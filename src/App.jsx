import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import SiteLayout from './Layouts/Site-Layout/SiteLayout';

const routes = createHashRouter(
    [

        // ====== authentication-routes ====== //

        {path: '/register' , element: <Register />},
        {path: '/login' , element: <Login />},

        // ====== site-routes ====== //

        {path: '/', element: <SiteLayout />}

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

    return <React.Fragment>

        <RouterProvider router={routes} future={{v7_startTransition: true}} />

    </React.Fragment>

}
