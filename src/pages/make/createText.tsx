import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/creatText.module.css'
import TextInput from '@/conponents/TextInput'
import PrimaryButton from '@/conponents/PrimaryButton'
import SecondaryButton from '@/conponents/SecondaryButton'
import ColorPicker from '@/conponents/ColorPicker'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import SwithButton from '@/conponents/SwitchButton'

const inter = Inter({ subsets: ['latin'] })

export default function Input() {
        

  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [others, setOthers] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');

  function hundleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function hundleX(event: React.ChangeEvent<HTMLInputElement>) {
    setX(event.target.value);
  }
  function hundleOrganization(event: React.ChangeEvent<HTMLInputElement>) {
    setOrganization(event.target.value);
  }

  function hundleTextColor(event: React.ChangeEvent<HTMLInputElement>) {
    setTextColor(event.target.value);
  }

  function hundleBgColor(event: React.ChangeEvent<HTMLInputElement>) {
    setBgColor(event.target.value);
  }

  function hundleinstagram(event: React.ChangeEvent<HTMLInputElement > ){
    setInstagram(event.target.value);
  }

  // function hundleother(event: React.ChangeEvent<HTMLInputElement>) {
  //   setOthers(event.target.value);
  // }

  return (
    <>

        <Header
          onClick_edit={() => console.log('編集完了')}
        />
      

      <main className={styles.main}>
        
        <div className={styles.preview}>
          プレビュー
        </div>
    

        <div className={styles.card}>
       <DisplayCard  id={""} name={name} organization={organization} x={x} instagram={instagram} others={""} urlEnabled={false} textColor={''} bgColor={''} onClickHandler={function (): void {
          throw new Error('Function not implemented.')
        } }/>
        </div>

         <div className={styles.swith}> 
        <SwithButton leftName={'入力'} rightName={'デザイン'} value={''}/>
        </div>

        <TextInput
          text="氏名"
          value={name}
          onChange={hundleName}
        />
         <TextInput
          text="instagram"
          value={instagram}
          onChange={hundleinstagram}
        />
        <TextInput
          text="X"
          value={x}
          onChange={hundleX}
        />
        {/* <TextInput
          text="その他"
          value={others}
          onChange={hundleother}
        /> */}
        <TextInput
          text="所属団体"
          value={organization}
          onChange={hundleOrganization}
        />
        <div className={styles.space}/>
        <SecondaryButton text="編集完了" onClick={() => console.log('SecondaryButton Clicked')} />
        
      </main>
    </>
  )
}