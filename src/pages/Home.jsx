import React, { useEffect } from 'react';
import { useNavbar } from '../features/navigation/hooks/useNavbar';

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
