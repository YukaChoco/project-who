import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Cards } from '@/types/Cards';
import styles from '@/styles/Cards.module.css'
import DisplayCard from './Card';

export default function MakeNewCard() {
    return (
        <DisplayCard
            id=""
            name="＋新規作成"
            organization=""
            x=""
            instagram=""
            others=""
            urlEnabled={false}
            textColor="#969696"
            bgColor="#FFF"
            onClickHandler={() => { }}
        />
    )
}

