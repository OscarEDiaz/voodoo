import { useUIStore } from "../../../store/useUIStore";

"use strict";

export const useNavbar = () => {
    const showNavbar    = useUIStore((state) => state.showNavbar);
    const setShowNavbar = useUIStore((state) => state.setShowNavbar);
    const pageTitle     = useUIStore((state) => state.pageTitle);
    const setPageTitle  = useUIStore((state) => state.setPageTitle);

    return {
        showNavbar,
        setShowNavbar,
        pageTitle,
        setPageTitle
    };
};