import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetUserFields {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getMyCardIds(userId: string) {
  const userFieldsQuery = await getDoc(doc(db, 'users', userId));
  const fetchIds: GetUserFields = userFieldsQuery.data() as GetUserFields;
  if (fetchIds.myCardIds === undefined) return null;
  const ids = fetchIds.myCardIds;
  return ids;
}
