import React, { createContext, useState } from 'react';
import authService from './authService';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const response = await authService.login(email, password);
        if (response.data.key) {
            setUser(response.data.user);
            localStorage.setItem('token', response.data.key);
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        localStorage.removeItem('token');
    };
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};