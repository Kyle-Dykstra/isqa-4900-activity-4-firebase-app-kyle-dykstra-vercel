import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

//REPLACE THE CODE BELOW WITH YOUR CONFIG FROM FIREBASE
const firebaseConfig = {
apiKey: "AIzaSyAebJj0juAZXRVt1ZWm_P0U8wQQ-aJi7tE",
authDomain: "subscriptions-db83d.firebaseapp.com",
projectId: "subscriptions-db83d",
storageBucket: "subscriptions-db83d.firebasestorage.app",
messagingSenderId: "405137440299",
appId: "1:405137440299:web:d7a1876e086e3a921f746e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
