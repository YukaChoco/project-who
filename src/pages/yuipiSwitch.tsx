import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/YuipiSwitch.module.css'
import SinpleButton from '@/conponents/SimpleButton'
import getCards from '@/hooks/getCards'
import SwitchButton from '@/conponents/SwitchButton'
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })


export default function Login() {
    const [mode, setMode] = useState('入力');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment !== null) {
            setMode(newAlignment);
        }
    };

    return (
        <>
            <main className={styles.main}>
                <div className={styles.center}>
                    <SwitchButton leftName='入力' rightName='デザイン' value={mode} onChange={handleAlignment}/>
                </div>
            </main>
        </>
    )
}