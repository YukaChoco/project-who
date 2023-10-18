import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

export default async function getHaveCardIds(userId: string) {
  const querySnapshot = await getDoc(doc(db, 'users', userId))
  const userdata: any = querySnapshot.data()
  const ids: string[] = userdata['have_card_ids']
  return ids;
}