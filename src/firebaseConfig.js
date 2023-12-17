import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOlX8GcUklC1xUEaKEZNjzJvfC-O76xAM",
    authDomain: "happiness-exchange-capstone.firebaseapp.com",
    projectId: "happiness-exchange-capstone",
    storageBucket: "happiness-exchange-capstone.appspot.com",
    messagingSenderId: "323390783340",
    appId: "1:323390783340:web:62913ad587e7576ad3fd49",
    measurementId: "G-TW8KH3BR77"
  };

// Log the contents of the firebaseConfig object
console.log('Firebase Config:', firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export const imageDb = getStorage(app)

export { auth, storage };
