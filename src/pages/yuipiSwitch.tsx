import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import SinpleButton from '@/conponents/SimpleButton'
import getCards from '@/hooks/getCards'
import SwitchButton from '@/conponents/SwitchButton'
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })


export default function Login() {
    getCards();

    const [alignment, setAlignment] = useState('入力');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <>
            <main className={styles.main}>
                <div className={styles.center}>
                    <h1>Switch Page</h1>
                    {/* <SinpleButton /> */}
                    <SwitchButton leftName='入力' rightName='デザイン' value={alignment} onChange={handleAlignment}/>
                    <br></br>
                    <SwitchButton leftName='氏名検索' rightName='ID検索' />
                </div>
            </main>
        </>
    )
}