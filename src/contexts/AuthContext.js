import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import api from '../services/api';

const Context = createContext();

function AuthProvider({ children }) {
    const [isAuthenticated, setAuth] = useState(true);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const token = async (value) => {
            await AsyncStorage.getItem('token')
        }
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`
            setAuth(true)
        }

        setLoading(false)
    }, [])

    async function login() {
        const { data: { token } } = await api.post('/signin', {
            "email": "thalitasantosc1@gmail.com",
            "password": "h23101998"
        })

        await AsyncStorage.setItem('token', token)
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuth(true)
    }

    async function logout() {
        await AsyncStorage.removeItem('token')
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