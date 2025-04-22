// Copyright (c) 2025 [Oscar Emiliano Ramírez Díaz]
// All rights reserved.

import { create } from "zustand"
import { homeConstants } from "../shared/constants"

export const useUIStore = create((set) => ({
    showNavbar: false,
    showSidebar: false,
    pageTitle: homeConstants.UI_STR_HOME_TITLE,
    setShowNavbar: (value) => set({ showNavbar: value }),
    setShowSidebar: (value) => set({ showSidebar: value }),
    setPageTitle: (title) => set({ pageTitle: title }),
}))