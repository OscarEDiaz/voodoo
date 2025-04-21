import React, { useEffect } from 'react';
import { useNavbar } from '../features/navigation/hooks/useNavbar';

export const Home = () => {
    const { setShowNavbar } = useNavbar();

    let connected = () => {
        setShowNavbar(true);
    };

    useEffect(() => {
        console.log("connected home");
        connected();
    }, [])

    return (
        <div className="v-module-container">
            test
        </div>
    );
};
