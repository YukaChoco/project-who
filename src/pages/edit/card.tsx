import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import InputTexts from '@/components/EditTexts';
import PrimaryButton from '@/components/PrimaryButton';
import useUser from '@/hooks/useUser';
import getCardDetails from '@/utils/ok/getCardDetils';
import updateData from '@/utils/ok/updateData';

export default function Index() {
  // const [mode, setMode] = useState<string>('入力');
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');

  const { userId } = useUser();

  const router = useRouter();
  const cardId = router.query.cardId as string;

  const cardData = {
    name,
    organization,
    x,
    instagram,
  };

  useEffect(() => {
    async function getEarlierCardData() {
      try {
        const cardDetails = await getCardDetails(cardId);

        if (cardDetails) {
          setName(cardDetails.name);
          setX(cardDetails.x);
          setInstagram(cardDetails.instagram);
          setOrganization(cardDetails.organization);
        } else {
          console.log(`not found`);
        }
      } catch (error) {
        console.error('Error', error);
      }
    }

    getEarlierCardData();
  }, [cardId]);

  const handleCompleted = async () => {
    console.log(userId);
    updateData(cardId, cardData);
    router.push('/cards');
    console.log(cardData);
  };
  return (
    <>
      <main className='error'>
        <div>
          <h1>作成中の画面です</h1>
          <p>cardId = {cardId}</p>
        </div>
        <InputTexts
          name={name}
          handleName={(event) => setName(event.target.value)}
          instagram={instagram}
          handleInstagram={(event) => setInstagram(event.target.value)}
          x={x}
          handleX={(event) => setX(event.target.value)}
          organization={organization}
          handleOrganization={(event) => setOrganization(event.target.value)}
        />
        <PrimaryButton text='ログインこちら' onClick={() => handleCompleted()} />
      </main>
    </>
  );
}
//関数作成とページ作成のプッシュを分ける
