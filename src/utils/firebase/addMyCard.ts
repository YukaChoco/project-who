import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

import addUserData from './addUserDataComp';
import AddMyCardComp from './addMyCaredComp';
import AddtoCardsComp from './addtoCardscomp';

export default async function AddMyCard() {
  //現在ログインしているユーザーを取得する
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      const docData = {
        userid: uid,
        field: {
          mycardid: 'これ',
          name: 'test',
          x: 'test',
          Instagram: 'test',
          others: 'test',
          organizatiton: 'test',
          text_color: 'test',
          bg_color: 'test',
        },
      };
      AddMyCardComp(docData);
      AddtoCardsComp(docData);
      console.log(uid);
    } else {
      // User is signed out
      // ...
    }
  });
}
