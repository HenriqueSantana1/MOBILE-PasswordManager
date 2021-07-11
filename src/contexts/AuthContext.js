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
            //api.defaults.headers.Authorization = `Bearer ${token}`
            setAuth(true)
        }

        setLoading(false)
    }, [])

    async function generatePW() {
        const { data } = await api.post('/generate', {
            "CharNum": 15,
            "incUp": 1,
            "incNum": 1,
            "incSym": 0
        })

        console.log(data)
    }

    async function signup() {
        const res = await api.post('/signup', {
            "name":"Henrique",
            "email": "thalitasaaaanatosc1@gmail.com",
            "password": "h23101998"
        })
        console.log(res)
    }

    async function login() {
        const { data: { token } } = await api.post('/signin', {
            "email": "thalitasantosc1@gmail.com",
            "password": "h23101998"
        })

        await AsyncStorage.setItem('token', token)
        //api.defaults.headers.Authorization = `Bearer ${token}`
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
        <Context.Provider value={{ isAuthenticated, signup, login, logout, generatePW}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }