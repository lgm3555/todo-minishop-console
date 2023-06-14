import axios from 'axios';
import Client from "../utils/Client"
import {AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN} from "../utils/constrants";

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
    }).then((res) => {
        localStorage.removeItem(AUTH_ACCESS_TOKEN)
        localStorage.removeItem(AUTH_REFRESH_TOKEN)
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