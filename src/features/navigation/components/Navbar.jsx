import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../../../shared/constants';

export const Navbar = ({ pageName }) => {
    const navigationItems = [
        'Home',
        'Test',
        'Test',
        'Test'
    ];

    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await signOut(auth);
            navigate(routeConstants.UI_ROUTE_LOGIN);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <ul>
            <h1>{pageName}</h1>
            {
                navigationItems.map((navItem, index) => {
                    return (
                        <li key={index}>
                            <a href="">{navItem}</a>
                        </li>
                    )
                })
            }
            <button onClick={handleLogOut}>sing out</button>
        </ul>
    );
};
