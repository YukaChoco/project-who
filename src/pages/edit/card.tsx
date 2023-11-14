import { useRouter } from 'next/router';
import styles from '@/styles/EditCard.module.css';

export default function Index() {
  const router = useRouter();
  const cardId = router.query.cardId as string;
  return (
    <>
      <main className='error'>
        <div>
          <h1>作成中の画面です</h1>
          <p>cardId = {cardId}</p>
        </div>
      </main>
    </>
  );
}
