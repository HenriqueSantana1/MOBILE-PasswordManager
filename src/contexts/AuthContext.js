import React, { createContext, useState } from 'react';
import { api } from '../services/api';

const Context = createContext();

function AuthProvider({ children }) {
    const [isAuthenticated, setAuth] = useState(false);
    const [token, setToken] = useState();

    async function signup() {
        const res = await api.post('/signup', {
            "name":"Henrique",
            "email": "aaaaaaaaaaaaaaaaaaaaaaaa@gmail.com",
            "password": "h23101998"
        }).then(res => {
            console.log('data')
            console.log(res.data)
            let response = res.data
            return response
        }).catch(err => {
            console.log('error:')
            console.log(err.response)
        })
        return res
    }
    
    async function signin() {
        const { data: { token } } = await api.post('/signin', {
            "email": "thalitasantosc1@gmail.com",
            "password": "h23101998"
        })
        setToken(token)
        setAuth(true)
    }
    
    async function handleLogout() {
        setAuth(false)
        setToken(null)
    }

    async function me() {
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.get('/me', reqHeaders)
        console.log(res.data.name)
        return res
    }

    async function list() {
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.get('/list', reqHeaders)
        console.log(res.data.pw)
        return res.data.pw
    }

    async function add() {
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.post('/add', {
            "title": "teste1",
            "password": "H@t14062017",
            "login": "henrique2310"
        }, reqHeaders)
        console.log(res)
        return res
    }

    async function update() {
        let id = '60e748b0e2adf38781b5713a'
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.put(`/update/${id}`, {
            "password":"H@t1aaa406"
        }, reqHeaders)
        console.log(res)
        return res
    }

    async function remove() {
        let id = '60e748b0e2adf38781b5713a'
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.delete(`/delete/${id}`, reqHeaders)
        console.log(res)
        return res
    }

    async function generatePW() {
        const { data } = await api.post('/generate', {
            "CharNum": 15,
            "incUp": 1,
            "incNum": 1,
            "incSym": 0
        })
        console.log(data)
    }

    async function decrypt() {
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.post('/decrypt',     {
            "content": "ef7042bdc3d538",
            "iv": "c71f2ea5eb3e366093dea1064a99ed63"
          }, reqHeaders)
        console.log(res.data)
        return res
    }

    return(
        <Context.Provider value={{ isAuthenticated, signup, signin, handleLogout, generatePW, list, token, add, decrypt, me, update, remove }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }