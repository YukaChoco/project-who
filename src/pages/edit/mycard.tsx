import { useRouter } from 'next/router';

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
//関数作成とページ作成のプッシュを分ける
