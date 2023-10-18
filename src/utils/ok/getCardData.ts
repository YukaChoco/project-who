import { db } from "@/firebase";
import type { MakeMyCardData } from "@/types/CardData";
import { doc, getDoc } from "firebase/firestore";

export default async function getCardData(cardId: string) {
  const docRef = doc(db, "cards", cardId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const cardData: MakeMyCardData = docSnap.data() as MakeMyCardData;
    return { id: cardId, ...cardData };
  } else {
    return null;
  }
}
