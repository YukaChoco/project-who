import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetData {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getHaveCardIds(userId: string) {
  const querySnapshot = await getDoc(doc(db, 'users', userId))
  const fetchIds: GetData = querySnapshot.data() as GetData
  if (fetchIds.haveCardIds === undefined) return null;
  const ids = fetchIds.haveCardIds;
  return ids;
}
