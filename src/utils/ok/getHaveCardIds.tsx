import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetData {
  myMainCardId: string;
  haveCardIds: string[];
  myCardIds: string[];
}

export default async function getHaveCardIds(userId: string) {
  const querySnapshot = await getDoc(doc(db, 'users', userId))
  const fetchIds: GetData = querySnapshot.data() as GetData
  const ids: string[] = fetchIds.haveCardIds;
  return ids;
}
