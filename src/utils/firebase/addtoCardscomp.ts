import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase'


interface Props {
  userid: string;
  field:{
  mycardid:string;
  name:string;
  x:string;
  Instagram:string;
  others:string;
  organizatiton:string;
  text_color:string;
  bg_color:string;
  }
}

export default async function AddtoCardsComp(docData:Props) {

  await setDoc(doc(db, "cards", docData.field.mycardid), docData.field);
}


