import React from 'react';
import AppRouter from './AppRouter';

import { Navbar } from '../features/navigation/components/Navbar';
import { useNavbar } from '../features/navigation/hooks/useNavbar';

export const App = () => {
    const { showNavbar, pageTitle } = useNavbar();

    return (
        <>
            { showNavbar && <Navbar pageName={pageTitle} /> }
            <AppRouter />
        </>
    );
};
