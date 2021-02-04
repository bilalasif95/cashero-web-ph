// import firebase from "firebase";
// import "firebase/auth";

// const config = {
// 	apiKey: "AIzaSyBv3Wq2KAXNmw0K4LdO6uLj-Ui5rQWBjPU",
// 	authDomain: "cashrotest.firebaseapp.com",
// 	databaseURL: "https://cashrotest.firebaseio.com",
// 	projectId: "cashrotest",
// 	storageBucket: "cashrotest.appspot.com",
// 	messagingSenderId: "467795251207",
// 	appId: "1:467795251207:web:9f90b6d90c03e70ee49aa2",
// 	measurementId: "G-J80DTPLL4N",
// };

// const config = {
// 	apiKey: "AIzaSyD5gY0ADVpG6hMBkDAbwQBgB4Eysv1W7PY",
// 	authDomain: "cashero-828.firebaseapp.com",
// 	databaseURL: "https://cashero-828.firebaseio.com",
// 	projectId: "cashero-828",
// 	// storageBucket: "cashero-828.appspot.com",
// 	messagingSenderId: "906680386983",
// 	appId: "1:906680386983:web:da4be5c8c8f814d7602282",
// 	measurementId: "G-XCWW4R23HE",
// 	storageBucket: "gs://cashero-828.appspot.com/",
// };

// const prodConfig = {
//     apiKey: process.env.REACT_APP_PROD_API_KEY,
//     authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
//   };

// const devConfig = {
//     apiKey: process.env.REACT_APP_DEV_API_KEY,
//     authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//     projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
//   };

// const config =
//   process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

// class Firebase {
// 	constructor() {
// 		app.initializeApp(config);

// 		this.auth = app.auth();
// 	}

// 	// *** Auth API ***

// 	doCreateUserWithEmailAndPassword = (email, password) =>
// 		this.auth.createUserWithEmailAndPassword(email, password);

// 	doSignInWithEmailAndPassword = (email, password) =>
// 		this.auth.signInWithEmailAndPassword(email, password);

// 	doSignInWithPhoneNumber = (phoneno, verifier) =>
// 		this.auth.signInWithPhoneNumber(phoneno, verifier);

// 	doSignOut = () => this.auth.signOut();

// 	doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

// 	doPasswordUpdate = (password) =>
// 		this.auth.currentUser.updatePassword(password);
// }

export const table = {
	Blogs: "Blogs",
	BlogsCategories: "BlogsCategories",
	ExchangeRates: "ExchageRates",
}
// export default Firebase;
// firebase.initializeApp(config);
// export default firebase;
