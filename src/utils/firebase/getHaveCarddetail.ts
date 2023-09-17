import { collection, doc, getDoc ,getDocs } from "firebase/firestore";
import { db } from '@/firebase'


interface Props {
  userid: string;
  cardid:string;
}

export default async function getHaveCarddetail(docData:Props) {
// const querySnapshot = await getDocs(collection(db, "users", docData.userid,"have_cards"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
const docRef = doc(db, "cards", docData.cardid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}



// export default async function get(docData:Props) {
//   const docRef = doc(collection(db, "users", docData.userid, "have_cards"));
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.data);
// }
// export default async function get(collection: string, id: string) {
//   const docRef = doc(db, collection, id);
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap);

// }