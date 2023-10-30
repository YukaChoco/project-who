import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetData {
  myMainCardId: string;
  haveCardIds: string[];
  myCardIds: string[];
}

export default async function getMyCardIds(userid: string) {
  const querySnapshot = await getDoc(doc(db, 'users', userid))
  const fetchIds: GetData = querySnapshot.data() as GetData;
  const ids: string[] = fetchIds.myCardIds;
  return ids;
}
