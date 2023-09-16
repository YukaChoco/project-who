import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase'


interface Props {
  name: string;
  x: string;
  instagram: string;
}

export default async function setUserData(docData:Props) {

  await setDoc(doc(db, "cards", "test_data"), docData);
}


