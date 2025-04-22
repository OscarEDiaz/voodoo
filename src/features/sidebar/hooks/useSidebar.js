import { useUIStore } from "../../../store/useUIStore";

"use strict";

export const useSidebar = () => {
    const showSidebar    = useUIStore((state) => state.showSidebar);
    const setShowSidebar = useUIStore((state) => state.setShowSidebar);
    const pageTitle      = useUIStore((state) => state.pageTitle);

    return {
        showSidebar,
        pageTitle,
        setShowSidebar
    }
};