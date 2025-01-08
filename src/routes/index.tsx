import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import LoginPage from './../pages/LoginPage.tsx';
import DashBoardPage from './../pages/DashBoardPage.tsx';
import Protected from './protected.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route path='private' element={<Protected />}>
                <Route index path='dashboard' element={<DashBoardPage />} />
            </Route>
            <Route index path='/' element={<LoginPage />} />
            <Route path='*' element={<h1>Page not found.</h1>} />
        </Route>
    )
);

const Index = () => {
    return <RouterProvider router={router} />
}

export default Index;