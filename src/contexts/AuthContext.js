import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { api, signup, generatePW } from '../services/api';

const Context = createContext();

function AuthProvider({ children }) {
    const [isAuthenticated, setAuth] = useState(false);
    const [loading, setLoading ] = useState(true);
    useEffect(() => {
        const token = async (value) => {
            await AsyncStorage.getItem('token')
        }
        if (token.value) {
            console.log(token.value)
            api.defaults.headers.Authorization = `Bearer ${token}`
            setAuth(true)
        }
        setLoading(false)
    }, [])

    async function signin() {
        const { data: { token } } = await api.post('/signin', {
            "email": "thalitasantosc1@gmail.com",
            "password": "h23101998"
        })
        console.log(token)
        await AsyncStorage.setItem('token', token)
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuth(true)
    }
    
    async function handleLogout() {
        await AsyncStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        setAuth(false)
    }

    if (loading) {
        return <AppLoading />
    }

    return(
        <Context.Provider value={{ isAuthenticated, signup, signin, handleLogout, generatePW}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }