import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,     
  signInWithEmailAndPassword,
 } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBIunytkt7TIelkwSUV9W7_oSDM9rbghkQ",
  authDomain: "gearboxnews-c7ad6.firebaseapp.com",
  projectId: "gearboxnews-c7ad6",
  storageBucket: "gearboxnews-c7ad6.appspot.com",
  messagingSenderId: "382573871941",
  appId: "1:382573871941:web:6d18a0c2425f18b26bb42c",
  measurementId: "G-NT5LY97W0Y"
};

const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

   export const createUserDocumentationFromAuth = async (
    userAuth,
    AdditionalInformation = {}
   ) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.id);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...AdditionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
   }

   export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword( auth, email, password);
   };

   export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
   };

  //  uploading data to Firebase
  

