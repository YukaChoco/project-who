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

export default async function AddMyCardComp(docData:Props) {

  await setDoc(doc(db, "users", docData.userid,"my_cards",docData.field.mycardid), {});
}


