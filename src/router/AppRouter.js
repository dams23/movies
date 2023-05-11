import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Navbar } from '../ui/Navbar/Navbar';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path='login/*'
                    element={
                        <PublicRoute>
                            <Routes>
                                <Route path='/*' element={<LoginPage />} />
                            </Routes>
                        </PublicRoute>
                    }
                />
                <Route
                    path='/*'
                    element={
                        <>
                            <PrivateRoute>
                                <Routes>
                                    <Route path='/*' element={<LoginPage />} />
                                </Routes>
                            </PrivateRoute>
                        </>
                    }
                />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};
