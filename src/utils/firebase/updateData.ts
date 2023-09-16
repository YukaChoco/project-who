import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/firebase'

export default async function updateData() {

  const docData = {
    name: "疲れた！！！！！！！",
    x: "hogehoge",
    instagram: "hugahuga",
  };
  await updateDoc(doc(db, "cards", "test_data"), docData);
}


