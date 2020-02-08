import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config= {
    apiKey: "AIzaSyAZ7r82gVlNugDxO0nmRsjHdBQrTa7CqxI",
    authDomain: "ecommerce-db-c8d50.firebaseapp.com",
    databaseURL: "https://ecommerce-db-c8d50.firebaseio.com",
    projectId: "ecommerce-db-c8d50",
    storageBucket: "ecommerce-db-c8d50.appspot.com",
    messagingSenderId: "697674281060",
    appId: "1:697674281060:web:31807eb4499549e4172f71",
    measurementId: "G-KD28PTJLMQ"
  };

export const createUserProfileDocument= async(userAuth, AdditionalData)=>{
  if(!userAuth) return;

  //Snapshot and documentRef from fireStore
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  console.log(snapshot);
  if(!snapshot.exists){
     //Data to be stored on the document under users collection
    const {displayName, email} =userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...AdditionalData
      })
    }
    catch(error){
        console.error("error while creating user", error.message)
    }
    
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth=  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const  signInWithGoogle =()=>auth.signInWithPopup(provider);

export default firebase;