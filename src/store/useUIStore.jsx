import { create } from "zustand"

export const useUIStore = create((set) => ({
    showNavbar: true,
    pageTitle: "Inicio",
    setShowNavbar: (value) => set({ showNavbar: value }),
    setPageTitle: (title) => set({ pageTitle: title }),
}))