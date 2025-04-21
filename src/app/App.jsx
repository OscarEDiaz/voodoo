import React from 'react';
import AppRouter from './AppRouter';

import { Navbar } from '../features/navigation/components/Navbar';
import { useNavbar } from '../features/navigation/hooks/useNavbar';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const App = () => {
    const { showNavbar, pageTitle } = useNavbar();
    const { user } = useAuth();

    return (
        <BrowserRouter>
            { (showNavbar && user) && <Navbar pageName={pageTitle} /> }
            <AppRouter />
        </BrowserRouter>
    );
};
