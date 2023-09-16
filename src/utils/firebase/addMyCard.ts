import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase'


interface Props {
  id: string;
}

export default async function AddMyCard() {
  const querySnapshot = await getDocs(collection(db, "user", "hOvlmmbmHDuD92fk8ZZB", "my_cards"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id);
  // });
  const ids: string[] = [];
  querySnapshot.forEach((doc) => ids.push(doc.id));
  return ids;
}


