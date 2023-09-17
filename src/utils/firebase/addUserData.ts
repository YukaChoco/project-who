import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase'


interface Props {
  id: string;
  fileld:{
    name: string;
  }
}

export default async function addUserData(docData:Props) {

  await setDoc(doc(db, "users", docData.id), {});
}


