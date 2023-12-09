import { useEffect, useState } from 'react';
import type { CardData } from '@/types/CardData';
import getCardFields from '@/utils/ok/getCardFields';

export default function useSingleCard(cardId: string) {
  const [cardData, setCardData] = useState<CardData | null>(null);

  useEffect(() => {
    const fetchCardDatas = async () => {
      const fetchedCardData = await getCardFields(cardId);
      setCardData(fetchedCardData);
    };
    fetchCardDatas();
  }, [cardId]);

  return [cardData];
}
