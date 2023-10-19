import addCardData from "./addCardData";
import addHaveCardId from "./addHaveCardId";
import type { MakeMyCardData, MakeOthersCardData } from "@/types/CardData";

export default async function makeHaveCard(userId: string, docData: MakeOthersCardData) {
  const cardData = {
    ...docData,
    authorId: userId,
    textColor: '#000',
    bgColor: '#FFF',
  }
  const newCardId = await addCardData(cardData);
  addHaveCardId(userId, newCardId);
}
