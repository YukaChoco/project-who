import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { onAuthStateChanged } from 'firebase/auth'
import { db } from '@/firebase'
import { doc, getDoc, getDocs } from 'firebase/firestore'
import getHaveCardIds from './getHaveCardIds'
import type { CardData } from '@/types/CardData'
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

// idをとる関数
async function getCardsComp(cardid: string) {
  const querySnapshot = await getDoc(doc(db, 'cards', cardid))
  const carddata: any = querySnapshot.data()
  return carddata
}
export default async function getHaveCardDetails() {
  return new Promise<CardData[]>(async (resolve, reject) => {
   
      if (user) {
        const getIds = await getHaveCardIds()
        const fetchedDetails: CardData[] = []
        getIds.map(async (id) => {
          const fetchedDetail: CardData = await getCardsComp(id)
          fetchedDetails.push(fetchedDetail)
        })

        resolve(fetchedDetails)
      } else {
        // User is signed out
        resolve([])
      }
    })
  }