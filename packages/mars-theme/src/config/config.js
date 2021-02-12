const API = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "https://spot.cashero.com";
const firebaseAPI = "https://firestore.googleapis.com/v1/projects/cashero-828/databases/(default)/documents/";

export const websiteLink = "https://staging.cashero.com";

export const wordPressLink = "https://test.cashero.com";

export const gtmId = "GTM-KKSRK7H";

export const EndPoints = {
    preregistration: `${API + "/api/users/preregistration"}`,
    getApp: `${API + "/api/users/getapp"}`,
}

const firebaseTableName = {
    ExchangeRates: "ExchageRates"
}

export const FirebaseEndPoints = {
    ExchangeRates: `${firebaseAPI + `${firebaseTableName.ExchangeRates}/BR`}`,
    IndividualExchangeRates: `${firebaseAPI + firebaseTableName.ExchangeRates}`,
}