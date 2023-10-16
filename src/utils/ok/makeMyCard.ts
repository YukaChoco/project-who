import addCardData from "./addCardData";
import addMyCardId from "./addMyCardId";
import type { CardData } from "@/types/CardData";

export default async function makeMyCard(docData: CardData) {
  const newCardId = await addCardData(docData);
  addMyCardId(newCardId);
}
