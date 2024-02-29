import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '@/firebase';

export default function useUser() {
  const [userId, setUserId] = useState<string | null | undefined>(undefined);
  const loading = userId === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      } else {
        setUserId(null);
      }
    });
  }, []);

  return { userId, loading };
}
