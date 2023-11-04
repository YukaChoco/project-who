import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'
import styles from '@/styles/creatText.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import SwitchButton from '@/conponents/SwitchButton'
import InputColors from '@/conponents/InputColors'
import InputTexts from '@/conponents/InputTexts'
import EditComplete from '@/conponents/EditComplete'
import makemycard from '@/utils/ok/makeMyCard'
import type { CardData } from '@/types/CardData'
import getCardDetils from '@/utils/ok/getCardDetils'

const inter = Inter({ subsets: ['latin'] })

export default function Input() {
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');

//   const [data, setData] = useState({
//   name:'',
//   x:'',
//   instagram:'',
//   organization:'',
//   textColor:'',
//   bgColor:''
// });
const router = useRouter();
const cardid = router.query.cardid as string;
const { userId, loading } = useUser();
const [cardData, setCardData] = useState<CardData | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      if (userId && cardid) {
        const cardData = await getCardDetils(cardid);
        setCardData(cardData);
      }
    };
    fetchUsers();
  }, [cardid, userId])

  if (loading) {
    <>
      <main>
        <h1>Loading...</h1>
      </main>
    </>
  }
const hundleOnClickEdit = () => {
  const cardData = {
      name: name,
      x: x,
      instagram: instagram,
      organization: organization,
      textColor: textColor,
      bgColor: bgColor,
  };
  console.log(cardData);
  if(userId){
    makemycard(userId,cardData);
  }
}

  const [mode, setMode] = useState<string>('入力');

  const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
  ) => {
      if (newAlignment !== null) {
          setMode(newAlignment);
      }
  };


  // function handleName(event: React.ChangeEvent<HTMLInputElement>) {
  //   setName(event.target.value);
  //   setData((data) => ({ ...data, name: event.target.value }));
  // }

  // function handleX(event: React.ChangeEvent<HTMLInputElement>) {
  //   setX(event.target.value);
  //   setData((data) => ({ ...data, x:event.target.value}));
  // }
  // function handleOrganization(event: React.ChangeEvent<HTMLInputElement>) {
  //   setOrganization(event.target.value);
  //   setData((data) => ({ ...data, organization: event.target.value}));
  // }

  function handleTextColor(event: React.ChangeEvent<HTMLInputElement>) {
    setTextColor(event.target.value);
    // setData((data) => ({ ...data, textColor:event.target.value}));
  }

  function handleBgColor(event: React.ChangeEvent<HTMLInputElement>) {
    setBgColor(event.target.value);
    // setData((data) => ({ ...data, bgColor: event.target.value}));
  }

  // function handleinstagram(event: React.ChangeEvent<HTMLInputElement>) {
  //   setInstagram(event.target.value);
  //   setData((data) => ({ ...data, instagram: event.target.value}));
  // }

          return (
            <>
              <Header
                {...mode === "完了" ? null : { onClick_edit: () => setMode("完了") }}
              />


              <main className={styles.main}>

                <div className={styles.preview}>
                  <p>プレビュー</p>
                </div>



                <div className={styles.card}>
                  <DisplayCard name={name} organization={organization} x={x} instagram={instagram}  urlEnabled={false} textColor={textColor} bgColor={bgColor} onClickHandler={function (): void {
                    throw new Error('Function not implemented.')
                  }} />
                </div>

                <div className={styles.change}>
                {
                  (() => {
                    if (mode=="デザイン") {
                      return(
                        <div>
                          <div className={styles.swith}>
                            <SwitchButton leftName={'入力'} rightName={'デザイン'} value={''} onChange={handleAlignment}/>
                          </div>

                          <InputColors textColor={textColor} handleTextColor={(event)=>setTextColor(event.target.value)} bgColor={bgColor} handleBgColor={(event)=>setBgColor(event.target.value)}/>
                        </div>
                      );
                    } else if(mode=="入力") {
                      return (
                        <div>
                          <div className={styles.swith}>
                            <SwitchButton leftName={'入力'} rightName={'デザイン'} value={''} onChange={handleAlignment}/>
                          </div>
                          <InputTexts name={name} handleName={(event)=>setName(event.target.value)} instagram={instagram} handleinstagram={(event)=>setInstagram(event.target.value)} x={x} handleX={(event)=>setX(event.target.value)} organization={organization} handleOrganization={(event)=>setOrganization(event.target.value)}/>
                        </div>
                      );
                    } else{
                      return(
                      <div className={styles.editBtn}>
                        <EditComplete setMode={hundleOnClickEdit}/>
                      </div>
                      )
                    }
                  })()
                }
              </div>
              </main>
            </>
          )
        }
        