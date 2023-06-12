import axios from 'axios';
import Client from "../utils/Client"

const client = new Client();

export const signUp = (username, password, nickname) => {
    if (username != "" && password != "" && nickname != "") {
        return axios.post("/auth/signUp", {
            username: `${username}`,
            password: `${password}`,
            nickname: `${nickname}`
        })
    }
}

export const signIn = (data) => {
    return client.call({
        url: `/auth/sign-in`,
        method: `post`,
        data: data
    }).catch(err => {
        console.log(err)
    })
};

export const signOut = () => {
    return client.call({
        url: '/auth/sign-out',
        method: 'post'
    })
}

export const refresh = () => {
    return axios.get("/auth/refresh")
}

export const check = () => {
    return client.call({
        url: `/auth/user`,
        method: `get`
    }).catch(err => {

    })
}