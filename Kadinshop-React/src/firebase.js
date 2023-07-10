import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXYaN0Er-gdYSbq2l6COvKImaB82XsdK4",
    authDomain: "kadin-e4484.firebaseapp.com",
    databaseURL: "https://kadin.firebaseio.com",
    projectId: "kadin-e4484",
    storageBucket: "kadin-e4484.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;