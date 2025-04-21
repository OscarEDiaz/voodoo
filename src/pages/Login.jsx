import React, { useEffect } from 'react';

import "../css/login.css";
import { useNavbar } from '../features/navigation/hooks/useNavbar';
import { LoginForm } from '../features/auth/components/LoginForm';

/**
 * @author oeramire
 * @function Login
 * @description Login page that renders the user form to login into homepage.
 *              Used features:
 *                  - auth
 * @returns Login component
 */

export const Login = () => {
    const { setShowNavbar } = useNavbar();
    
    const connected = () => {
        setShowNavbar(false);
    };

    const disconnected = () => {
        return;
    };
    
    useEffect(() => {
        connected();
        return () => disconnected();
    }, []);


    return (
        <div className='v-login-container'>
            <LoginForm />
        </div>
    );
};
