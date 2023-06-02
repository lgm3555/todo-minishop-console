import * as React from 'react';
import {AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN} from "./constrants";
import axios from "axios";

class Client {

    async call(config) {
        const authAccessToken = localStorage.getItem(AUTH_ACCESS_TOKEN);
        const authRefreshToken = localStorage.getItem(AUTH_REFRESH_TOKEN);

        console.log('authAccessToken : ' + authAccessToken)
        console.log('authRefreshToken : ' + authRefreshToken)

        if (authAccessToken) {
            config.headers = Object.assign(config.headers||{}, {
                "Authorization": `Bearer ${authAccessToken}`
            })
        } else if (authRefreshToken) {
            config.headers = Object.assign(config.headers||{}, {
                "Authorization": `Bearer ${authRefreshToken}`
            })
        }

        return new Promise(async (resolve, reject) => {
            let response = await axios.request(config);
            console.log(response.data)

        });
    }
}

export default Client;