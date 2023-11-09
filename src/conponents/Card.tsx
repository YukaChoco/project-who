import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Cards.module.css'
import { toXProfileURL, toInstagramProfileURL } from '@/utils/ok/toSNSProfileURL';
import Link from 'next/link';
import type { CardData } from '@/types/CardData';

interface Props extends CardData {
  urlEnabled: boolean;
  onClickHandler?: () => void;
}

export default function DisplayCard(props: Props) {
  const onClick = props.urlEnabled ? props.onClickHandler : () => { };
  return (
    <Card className={styles.cards} sx={{ backgroundColor: `${props.bgColor}`, color: `${props.textColor}` }} onClick={onClick}>
      <CardContent>
        <Typography className={styles.belong} >
          {props.organization}
        </Typography>
        <Typography className={styles.username} >
          {props.name}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={styles.urlContainer}>
        {props.x &&
          <Link href={toXProfileURL(props.id)}>X@{props.x}</Link>
        }
        {props.instagram &&
          <Link href={toInstagramProfileURL(props.id)}>Instagram@{props.instagram}</Link>
        }
      </CardActions>
    </Card >
  );
}