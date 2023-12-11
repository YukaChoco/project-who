import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { CARD_TYPE, CardType } from '@/types/CardType';
import type { UserFields } from '@/types/UserFields';

export default async function getCardIdsByUserId(userId: string, cardType: CardType) {
  const userFieldsQuery = await getDoc(doc(db, 'users', userId));
  const fetchUserFields: UserFields = userFieldsQuery.data() as UserFields;
  const fieldName = cardType === CARD_TYPE.My ? 'myCardIds' : 'haveCardIds';

  if (fetchUserFields[`${fieldName}`] === undefined) return null;
  const cardIds = fetchUserFields[`${fieldName}`];
  return cardIds;
}
