import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetUserFields {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getMyCardIdsByUserId(userId: string) {
  const userFieldsQuery = await getDoc(doc(db, 'users', userId));
  const fetchUserFields: GetUserFields = userFieldsQuery.data() as GetUserFields;
  if (fetchUserFields.myCardIds === undefined) return null;
  const ids = fetchUserFields.myCardIds;
  return ids;
}
