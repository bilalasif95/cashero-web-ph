const API = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://34.123.180.240:9001";

export const EndPoints = {
    preregistration: `${API + "/api/users/preregistration"}`,
    getApp: `${API + "/api/users/getapp"}`,
}

