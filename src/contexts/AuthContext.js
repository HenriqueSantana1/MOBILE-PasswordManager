import React, { createContext, useState } from 'react';
import { api } from '../services/api';

const Context = createContext();

function AuthProvider({ children }) {
    const [isAuthenticated, setAuth] = useState(false);
    const [token, setToken] = useState();

    async function signup(name, email, password) {
        const res = await api.post('/signup', {
            "name": name,
            "email": email,
            "password": password
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
    
    async function signin(email, password) {
        console.log(email)
        console.log(password)
        const { data: { token } } = await api.post('/signin', {
            "email": email,
            "password": password
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

    async function add(title, password, login) {
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.post('/add', {
            "title": title,
            "password": password,
            "login": login
        }, reqHeaders)
        console.log(res)
        return res
    }

    async function update(id, password) {
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.put(`/update/${id}`, {
            "password": password
        }, reqHeaders)
        console.log(res)
        return res
    }

    async function remove(id) {
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

    async function generatePW(CharNum, up, num, sym) {
        const { data } = await api.post('/generate', {
            "CharNum": CharNum,
            "incUp": up,
            "incNum": num,
            "incSym": sym
        })
        console.log(data)
    }

    async function decrypt(content, iv) {
        const reqHeaders = {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
              }
        }
        const res = await api.post('/decrypt',     {
            "content": content,
            "iv": iv
          }, reqHeaders)
        return res
    }

    return(
        <Context.Provider value={{ isAuthenticated, signup, signin, handleLogout, generatePW, list, token, add, decrypt, me, update, remove }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }