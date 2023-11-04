import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetUserFields {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getMyCardIds(userid: string) {
  const querySnapshot = await getDoc(doc(db, 'users', userid))
  const fetchIds: GetUserFields = querySnapshot.data() as GetUserFields;
  if (fetchIds.myCardIds === undefined) return null;
  const ids = fetchIds.myCardIds;
  return ids;
}
