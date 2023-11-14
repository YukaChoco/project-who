import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';

interface Props {
  userid: string;
  fileld: {
    name: string;
  };
}

export default async function AddUserDataComp(docData: Props) {
  await setDoc(doc(db, 'users', docData.userid), {});
}
