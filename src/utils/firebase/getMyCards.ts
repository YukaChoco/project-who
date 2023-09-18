import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '@/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged } from "firebase/auth";

import addUserData from './addUserDataComp'
import AddMyCardComp from "./addMyCaredComp";
import AddtoCardsComp from "./addtoCardscomp";
import firestore from "./firestore";
import getMyCardIdComp from "./getMyCardIdComp";


export default async function getMyCards() {  

    //現在ログインしているユーザーを取得する
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const docData = {
          userid: uid,
        };
        getMyCardIdComp(docData);
        
      } else {
        // User is signed out
        // ...
      }
    });

    
}



