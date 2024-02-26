import getMyCardIdsByUserId from './getMyCardIdsByUserId';
import getCardDetails from './getCardDetails';
import type { CardData } from '@/types/CardData';

export default async function getMyCardDetailsByUserId(userId: string) {
  const myCardIds = await getMyCardIdsByUserId(userId);

  if (!myCardIds) return null;

  const fetchedDetails = await getCardDetails(myCardIds[0]);

  return fetchedDetails;
}
