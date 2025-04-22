// Copyright (c) 2025 [Oscar Emiliano Ramírez Díaz]
// All rights reserved.

import React from 'react';
import AppRouter from './AppRouter';

import { Navbar } from '../features/navigation/components/Navbar';
import { useNavbar } from '../features/navigation/hooks/useNavbar';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const App = () => {
    const { showNavbar } = useNavbar();
    const { user } = useAuth();

    return (
        <BrowserRouter>
            { (showNavbar && user) && <Navbar /> }
            <AppRouter />
        </BrowserRouter>
    );
};
