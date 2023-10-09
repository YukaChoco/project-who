import addCardData from "./addCardData";
import addHaveCardId from "./addHaveCardId";
import type { CardData, OthersCardData } from "@/types/CardData";

export default async function makeHaveCard(docData: OthersCardData) {
  const cardData: CardData = {
    ...docData,
    text_color: '#000',
    bg_color: '#FFF',
  }
  const newCardId = await addCardData(cardData);
  addHaveCardId(newCardId);
}
