import axios from "axios";

export const callApi = (endpoint, method, token, payload, language) => {
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
            'Accept-Language': language === "english" ? "en" : "br",
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