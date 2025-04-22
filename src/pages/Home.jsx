// Copyright (c) 2025 [Oscar Emiliano Ramírez Díaz]
// All rights reserved.

import React, { useEffect } from 'react';
import { useNavbar } from '../features/navigation/hooks/useNavbar';

/**
 * @author oeramire
 * @function Home
 * @description Home page that renders the main home page module.
 *              Used features:
 *                  - null
 * @returns Home component
 */
export const Home = () => {
    const { setShowNavbar } = useNavbar();

    let connected = () => {
        setShowNavbar(true);
    };
    
    let disconnected = () => {
        setShowNavbar(false);
    };

    useEffect(() => {
        connected();

        return () => disconnected();
    }, [])

    return (
        <div className="v-module-container">
            test
        </div>
    );
};
