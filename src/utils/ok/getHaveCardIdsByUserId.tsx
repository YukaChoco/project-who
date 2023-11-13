import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface UserFields {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getHaveCardIdsByUserId(userId: string) {
  const userFieldsQuery = await getDoc(doc(db, 'users', userId));
  const fetchUserFields: UserFields = userFieldsQuery.data() as UserFields;
  if (fetchUserFields.haveCardIds === undefined) return null;
  const haveCardIds = fetchUserFields.haveCardIds;
  return haveCardIds;
}
