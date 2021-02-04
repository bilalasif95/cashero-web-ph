import { table } from "./firebase";

const API = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "https://spot.cashero.com";
const firebaseAPI = "https://firestore.googleapis.com/v1/projects/cashero-828/databases/(default)/documents/";

export const EndPoints = {
    preregistration: `${API + "/api/users/preregistration"}`,
    getApp: `${API + "/api/users/getapp"}`,
}

export const FirebaseEndPoints = {
    ExchangeRates: `${firebaseAPI + `${table.ExchangeRates}/BR`}`,
    IndividualExchangeRates: `${firebaseAPI + `${table.ExchangeRates}`}`,
}