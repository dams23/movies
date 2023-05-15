import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { HomeScreen } from '../pages/HomeScreen/HomeScreen';
import { NotFound } from '../pages/NotFound/NotFound';
import { MovieScreen } from '../pages/MovieScreen/MovieScreen';
import { SearchScreen } from '../pages/SearchScreen/SearchScreen';
import UserProvider from '../context/context';
import { GenresScreen } from '../pages/GenresScreen/GenresScreen';
export const AppRouter = () => {
    return (
        <>
        <UserProvider>

            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/movie/:id' element={<MovieScreen />} />
                    <Route path='/search' element={<SearchScreen />} />
                    <Route path='/genres/:id' element={<GenresScreen />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
        </>
    );
};
