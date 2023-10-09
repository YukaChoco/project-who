import { doc, addDoc, collection } from "firebase/firestore";
import { db } from '@/firebase'
import type { CardData } from "@/types/CardData";

export default async function addCardData(docData: CardData) {

  const docRef = await addDoc(collection(db, "cards"), docData);

  return docRef.id;
}
