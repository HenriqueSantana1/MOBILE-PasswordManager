import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pwman.herokuapp.com/',
});

export const generatePW = async function generatePW() {
    const { data } = await api.post('/generate', {
        "CharNum": 15,
        "incUp": 1,
        "incNum": 1,
        "incSym": 0
    })
    console.log(data)
}

export const signup = async () => {
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

