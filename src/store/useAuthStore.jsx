// Copyright (c) 2025 [Oscar Emiliano Ramírez Díaz]
// All rights reserved.

import { create } from "zustand"

export const useAuthStore = create((set) => ({
    user: null,
    loading: true,
    error: null,
    setUser: (value) => set({ user: value }),
    setLoading: (value) => set({ loading: value }),
    setError: (error) => set({ error: error})
}))