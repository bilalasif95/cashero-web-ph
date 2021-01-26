import axios from "axios"
// import config from "./config/config"

export const callApi = (endpoint, method, token, payload) => {
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};

    const configaxios = {
        method,
        url: endpoint,
        data: payload,
        headers: {
            // Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            ...authHeaders,
        }
    }

    return new Promise((resolve, reject) => {
        axios(configaxios).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })

}