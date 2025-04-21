import React from 'react';
import AppRouter from './AppRouter';

import { useUIStore } from './store/useUIStore';
import { Navbar } from './features/navigation/components/Navbar';

export const App = () => {
    const showNavbar = useUIStore((state) => state.showNavbar);
    const pageTitle = useUIStore((state) => state.pageTitle);

    return (
        <>
            { showNavbar && <Navbar pageName={pageTitle} /> }
            <AppRouter />
        </>
    );
};
