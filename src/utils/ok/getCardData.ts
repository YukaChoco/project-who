import { db } from "@/firebase";
import type { CardData } from "@/types/CardData";
import { doc, getDoc } from "firebase/firestore";

export default async function getCardData(cardId: string) {
  const docRef = doc(db, "cards", cardId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const cardData: CardData = docSnap.data() as CardData;
    return cardData;
  } else {
    return null;
  }
}
