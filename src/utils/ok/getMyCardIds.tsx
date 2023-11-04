import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetData {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getMyCardIds(userid: string) {
  const querySnapshot = await getDoc(doc(db, 'users', userid))
  const fetchIds: GetData = querySnapshot.data() as GetData;
  if (fetchIds.myCardIds === undefined) return null;
  const ids = fetchIds.myCardIds;
  return ids;
}
