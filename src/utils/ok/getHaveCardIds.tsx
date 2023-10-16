import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { onAuthStateChanged } from 'firebase/auth'
import { db } from '@/firebase'
import { doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

interface Props {
  userid: string
}
// idをとる関数
async function getHaveCardsComp(docData: Props) {
  const querySnapshot = await getDoc(doc(db, 'users', docData.userid))
  const userdata: any = querySnapshot.data()
  const ids = userdata['have_card_ids']
  return ids
}
export default async function getHaveCardIds() {
  return new Promise<string[]>(async (resolve, reject) => {

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid
        const docData = {
          userid: uid,
        }
        console.log(uid)
        const fetchedIds: string[] = await getHaveCardsComp(docData)
        resolve(fetchedIds);
      } else {
        // User is signed out
        resolve([]);
      }
    });
  }
