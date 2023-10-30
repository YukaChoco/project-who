import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/creatText.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import SwitchButton from '@/conponents/SwitchButton'
import InputColors from '@/conponents/InputColors'
import InputTexts from '@/conponents/InputTexts'
import EditComplete from '@/conponents/EditComplete'

const inter = Inter({ subsets: ['latin'] })

export default function Input() {
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');

  const [data, setData] = useState({
  name:'',
  x:'',
  instagram:'',
  organization:'',
  textColor:'',
  bgColor:''
});

  const [mode, setMode] = useState<string>('入力');

  const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
  ) => {
      if (newAlignment !== null) {
          setMode(newAlignment);
      }
  };


  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    setData((data) => ({ ...data, name: event.target.value }));
  }

  function handleX(event: React.ChangeEvent<HTMLInputElement>) {
    setX(event.target.value);
    setData((data) => ({ ...data, x:event.target.value}));
  }
  function handleOrganization(event: React.ChangeEvent<HTMLInputElement>) {
    setOrganization(event.target.value);
    setData((data) => ({ ...data, organization: event.target.value}));
  }

  function handleTextColor(event: React.ChangeEvent<HTMLInputElement>) {
    setTextColor(event.target.value);
    setData((data) => ({ ...data, textColor:event.target.value}));
  }

  function handleBgColor(event: React.ChangeEvent<HTMLInputElement>) {
    setBgColor(event.target.value);
    setData((data) => ({ ...data, bgColor: event.target.value}));
  }

  function handleinstagram(event: React.ChangeEvent<HTMLInputElement>) {
    setInstagram(event.target.value);
    setData((data) => ({ ...data, instagram: event.target.value}));
  }

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
                  <DisplayCard id={""} name={name} organization={organization} x={x} instagram={instagram} others={""} urlEnabled={false} textColor={textColor} bgColor={bgColor} onClickHandler={function (): void {
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

                          <InputColors textColor={textColor} handleTextColor={handleTextColor} bgColor={bgColor} handleBgColor={handleBgColor}/>
                        </div>
                      );
                    } else if(mode=="入力") {
                      return (
                        <div>
                          <div className={styles.swith}>
                            <SwitchButton leftName={'入力'} rightName={'デザイン'} value={''} onChange={handleAlignment}/>
                          </div>
                          <InputTexts name={name} handleName={(event)=>setName(event.target.value)} instagram={instagram} handleinstagram={handleinstagram} x={x} handleX={handleX} organization={organization} handleOrganization={handleOrganization}/>
                        </div>
                      );
                    } else{
                      return(
                      <div className={styles.editBtn}>
                        <EditComplete setMode={() => console.log(data)}/>
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