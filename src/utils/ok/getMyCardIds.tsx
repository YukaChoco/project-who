import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

export default async function getMyCardIds(userid: string) {
  const querySnapshot = await getDoc(doc(db, 'users', userid))
  const userdata: any = querySnapshot.data()
  const ids: string[] = userdata['my_card_ids']
  return ids
}
