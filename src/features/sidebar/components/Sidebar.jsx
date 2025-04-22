import React, { useEffect, useState } from 'react'
import { useSidebar } from '../hooks/useSidebar';

import '../../../css/sidebar.css';

"use strict";

export const Sidebar = ({ sidebarItems, setModule }) => {
    const [selectedItem, setSelectedItem] = useState({ itemIndex: 0, node: undefined });

    const connected = () => {
        var selectedNode = document.querySelector('#sidebarItem_0');
        selectedNode.style.borderColor = 'var(--v-main-focus-color)';
        selectedNode.style.color = 'var(--v-main-focus-color)';
        setSelectedItem({ itemIndex: 0, node: selectedNode });
    };

    const disconnected = () => {};

    const focusNode = (selectedNode, itemIndex) => {
        selectedItem.node.style.borderColor = 'var(--v-main-border-color)';
        selectedItem.node.style.color = 'var(--v-login-font-color)';
        
        selectedNode.style.borderColor = 'var(--v-main-focus-color)';
        selectedNode.style.color = 'var(--v-main-focus-color)';
    };

    const handleResouceSelected = (itemIndex, module) => {
        if (selectedItem === itemIndex) return;
        var selectedNode = document.querySelector('#sidebarItem_' + itemIndex);

        focusNode(selectedNode, itemIndex);
        setModule(module);
        setSelectedItem({ itemIndex: itemIndex, node: selectedNode });
    };

    useEffect(() => {
        connected();

        return () => disconnected();
    }, []);

    return (
        <div className='v-sidebar-container'>
            <ul className='v-sidebar-items-container'>
                {
                    sidebarItems.map((sidebarItem, index) => {
                        return (
                            <li id={`sidebarItem_` + index} onClick={() => handleResouceSelected(index, sidebarItem.itemModule)} key={index}>
                                <p>{sidebarItem.itemLabel}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};
