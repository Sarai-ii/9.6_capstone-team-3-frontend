import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBs5MRWBSM4UbF4YczIBp5e2rBak1Ig4o0",
    authDomain: "happiness-exchange.firebaseapp.com",
    projectId: "happiness-exchange",
    storageBucket: "happiness-exchange.appspot.com",
    messagingSenderId: "8281477779",
    appId: "1:8281477779:web:6fc2a1e2456e279f6cf366",
    measurementId: "G-NZ7Z2B6RXC"
};

// Log the contents of the firebaseConfig object
console.log('Firebase Config:', firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
