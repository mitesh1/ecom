import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyCKiQOVIM2jiY0RAnhQ0ms68kxM3al0cfM",
    authDomain: "cw-crown.firebaseapp.com",
    projectId: "cw-crown",
    storageBucket: "cw-crown.appspot.com",
    messagingSenderId: "163412337302",
    appId: "1:163412337302:web:4ae4e4c9bffe7f1f7b98b7",
    measurementId: "G-WLJ9NJCTRZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot.data());

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;