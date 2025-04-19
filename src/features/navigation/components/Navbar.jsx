import React from 'react';

export const Navbar = ({ pageName }) => {
    const navigationItems = [
        'Home',
        'Test',
        'Test',
        'Test'
    ];

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
        </ul>
    );
};
