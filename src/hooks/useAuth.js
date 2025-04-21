import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

"use strict";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Detecta si el usuario está logueado al cargar la app
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return { user, loading, login, logout };
}
