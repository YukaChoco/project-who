import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'

export default function useUser() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
        setLoading(false);
      } else {
        setUserId(null);
        setLoading(false);
      }
    });
  }, []);

  return { userId, loading }
}
