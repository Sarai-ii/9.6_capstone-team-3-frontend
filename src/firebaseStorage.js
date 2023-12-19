// FirebaseStorage.js - handles storage references

import { getStorage, ref } from 'firebase/storage';
import { storage } from './firebaseConfig'; // Import the initialized storage service

// Create a reference to the root of your Cloud Storage bucket
const storageRef = ref(storage);

export { storageRef };