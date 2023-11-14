import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface UserFields {
  haveCardIds: string[] | undefined;
  myCardIds: string[] | undefined;
}

export default async function getMyCardIdsByUserId(userId: string) {
  const userFieldsQuery = await getDoc(doc(db, 'users', userId));
  const fetchUserFields: UserFields = userFieldsQuery.data() as UserFields;
  if (fetchUserFields.myCardIds === undefined) return null;
  const myCardIds = fetchUserFields.myCardIds;
  return myCardIds;
}
