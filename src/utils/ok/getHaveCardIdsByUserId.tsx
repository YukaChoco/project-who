import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface GetUserFields {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getHaveCardIdsByUserId(userId: string) {
  const userFieldsQuery = await getDoc(doc(db, 'users', userId));
  const fetchUserFields: GetUserFields = userFieldsQuery.data() as GetUserFields;
  if (fetchUserFields.haveCardIds === undefined) return null;
  const haveCardIds = fetchUserFields.haveCardIds;
  return haveCardIds;
}
