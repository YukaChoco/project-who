import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  userId: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      res.status(200).json({ userId: uid })
    } else {
      res.status(201).json({ userId: '' })
    }
  });
}
