import React, { useEffect, useState } from 'react';

import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavbar } from '../hooks/useNavbar';
import { navbarConstants } from '../../../shared/constants';

import "../../../css/navbar.css";
import { paths, routes } from '../../../app/routes';


"use strict";

export const Navbar = () => {
    const [selectedResouce, setSelectedResource] = useState({ id: navbarConstants.UI_STR_HOME, node: null });
    const navigate = useNavigate();
    const { pageTitle, setPageTitle } = useNavbar();
    const location = useLocation();

    const connected = () => {
        const selectednode = document.querySelector(`[id^=${selectedResouce.id}]`);

        setSelectedResource({ id: navbarConstants.UI_STR_HOME, node: selectednode });
    };

    const disconnected = () => {};

    const focusSelectedResource = (resourceId) => {
        const selectedNode = document.querySelector(`[id^=${resourceId}]`);
        selectedNode.style.color = 'var(--v-main-focus-color)';
        setSelectedResource({ id: resourceId, node: selectedNode });
    };

    const handleResourceSelect = (resourceId) => {
        if (selectedResouce.node)
            selectedResouce.node.style.color = 'var(--v-login-font-color)';

        focusSelectedResource(resourceId);
        setPageTitle(resourceId);

        switch (resourceId) {
            case navbarConstants.UI_STR_HOME:
                navigate(paths.HOME_PATH);
                break;
            case navbarConstants.UI_STR_SALES:
                navigate(paths.SALES_PATH);
                break;
            default:
                break;
        }
    };

    const handleResourceChangedByUrl = (pathName) => {
        if (selectedResouce.node)
            selectedResouce.node.style.color = 'var(--v-login-font-color)';

        switch (pathName) {
            case routes.HOME.path:
                focusSelectedResource(navbarConstants.UI_STR_HOME);
                break;
            case routes.SALES.path:
                focusSelectedResource(navbarConstants.UI_STR_SALES);
                break;
            default:
                break;
        }
    };

    const handleLogOut = async () => {
        try {
            await signOut(auth);
            navigate(paths.LOGIN_PATH);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        connected();

        return () => disconnected();
    }, [])

    useEffect(() => {
        handleResourceChangedByUrl(location.pathname);
    }, [location.pathname]);

    const navigationItems = [
        { itemLabel: navbarConstants.UI_STR_HOME,        itemAction: () => handleResourceSelect(navbarConstants.UI_STR_HOME)  },
        { itemLabel: navbarConstants.UI_STR_SALES,       itemAction: () => handleResourceSelect(navbarConstants.UI_STR_SALES) },
        { itemLabel: navbarConstants.UI_STR_ITEMS,       itemAction: () => {}                                                 },
        { itemLabel: navbarConstants.UI_STR_ORDERS,      itemAction: () => {}                                                 },
        { itemLabel: navbarConstants.UI_STR_INVENTORIES, itemAction: () => {}                                                 },
        { itemLabel: navbarConstants.UI_STR_REPORTS,     itemAction: () => {}                                                 },
        { itemLabel: navbarConstants.UI_STR_CHECKS,      itemAction: () => {}                                                 },
        { itemLabel: navbarConstants.UI_STR_LOGOUT,      itemAction: handleLogOut, isLogout: true },
    ];

    return (
        <ul className='v-navbar-container'>
            <h1 className='v-page-title'>{pageTitle}</h1>
            <div className="v-navbar-items-container">
                {
                    navigationItems.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <a 
                                    id={`${navItem.itemLabel}_${index}`} 
                                    onClick={navItem.itemAction}
                                    className={`${navItem.isLogout ? 'v-navbar-logout' : ''}`}
                                >
                                        {navItem.itemLabel}
                                </a>
                            </li>
                        )
                    })
                }
            </div>
        </ul>
    );
};
