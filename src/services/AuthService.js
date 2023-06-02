import axios from 'axios';
import Client from "../utils/Client"

const client = new Client();

export const signUp = (username, password, nickname) => {
    if (username != "" && password != "" && nickname != "") {
        return axios.post("/auth/signup", {
            username: `${username}`,
            password: `${password}`,
            nickname: `${nickname}`
        })
    }
}

export const signIn = (data) => {
    return client.call({
        url: `/auth/authorize`,
        method: `post`,
        data: data
    })
};

export const refresh = () => {
    return axios.get("/auth/refresh")
}

export const check = (config) => {
    return axios.get("auth/user", config)
}