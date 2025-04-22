import React, { useEffect, useState } from 'react';

import { useNavbar } from '../features/navigation/hooks/useNavbar';
import { useSidebar } from '../features/sidebar/hooks/useSidebar';
import { Sidebar } from '../features/sidebar/components/Sidebar';
import { salesConstants } from '../shared/constants';
import { SalesModule, TicketsModule } from '../features/sales/components';

export const Sales = () => {
    const [currentModule, setCurrentModule] = useState(<SalesModule />);

    const { setShowNavbar } = useNavbar();
    const { setShowSidebar } = useSidebar();

    const salesItems = [
        { itemLabel: salesConstants.UI_STR_SALE, itemModule: <SalesModule /> },
        { itemLabel: salesConstants.UI_STR_TICKETS, itemModule: <TicketsModule /> },
        { itemLabel: salesConstants.UI_STR_CASH_REGISTERS, itemModule: <TicketsModule /> },
        { itemLabel: salesConstants.UI_STR_EXPENSES, itemModule: <TicketsModule /> },
        { itemLabel: salesConstants.UI_STR_WITHDRAWALS, itemModule: <TicketsModule /> },
        { itemLabel: salesConstants.UI_STR_INCOMES, itemModule: <TicketsModule /> },
    ];

    const connected = () => {
        setShowNavbar(true);
        setShowSidebar(true);
    };

    const disconnected = () => {
        setShowSidebar(false);
        setShowNavbar(false);
    };

    useEffect(() => {
        connected();

        return () => disconnected();
    }, [])

    return (
        <div className="v-module-container">
            <Sidebar sidebarItems={salesItems} setModule={setCurrentModule} />
            { currentModule }
        </div>
    );
};
