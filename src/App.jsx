import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Register from './Authentication/Register';
import Login from './Authentication/Login';

const routes = createHashRouter(
    [

        // ====== authentication-routes ====== //

        {path: '/register' , element: <Register />},
        {path: '/login' , element: <Login />},

    ] , 
    
    {
        future: {
            v7_startTransition: true,
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

        <RouterProvider router={routes} />

    </React.Fragment>

}
