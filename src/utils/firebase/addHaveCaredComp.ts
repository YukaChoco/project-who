import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase'


interface Props {
  userid: string;
  havecardid:string;
}

export default async function AddHaveCardComp(docData:Props) {

  await setDoc(doc(db, "users", docData.userid,"have_cards",docData.havecardid), {});
}


