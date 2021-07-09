import React, { createContext, useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import api from '../services/api';

const Context = createContext();

function AuthProvider({ children }) {
    const [isAuthenticated, setAuth] = useState(false);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuth(true)
        }

        setLoading(false)
    }, [])

    async function login() {
        const { data: { token } } = await api.post('/signin', {
            "email": "thalitasantosaaac1@gmail.com",
            "password": "h23101998"
        })

        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuth(true)
    }

    function logout() {
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined
        setAuth(false)
    }

    if (loading) {
        return <AppLoading />
    }

    return(
        <Context.Provider value={{ isAuthenticated, login, logout}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }