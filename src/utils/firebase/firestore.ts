import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase'

export default async function get() {
  const docRef = doc(db, "user", "hOvlmmbmHDuD92fk8ZZB", "havecards", "fGFZyjzvWx7KSliSRCfo");
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
}
// export default async function get(collection: string, id: string) {
//   const docRef = doc(db, collection, id);
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap);

// }


