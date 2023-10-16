import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Cards } from '@/types/Cards';
import styles from '@/styles/Cards.module.css'
import { getURL } from '@/utils/ok/getURL';
import Link from 'next/link';

export default function DisplayCard(props: Cards) {
  const onClick = props.urlEnabled ? props.onClickHandler : () => { };
  return (
    <Card className={styles.cards} sx={{ backgroundColor: `${props.bgColor}`, color: `${props.textColor}` }} onClick={onClick}>
      <CardContent>
        <Typography className={styles.belong} >
          {props.organization}
        </Typography>
        {/* <div className={styles.usernameWrap}> */}
        <Typography className={styles.username} >
          {props.name}
        </Typography>
        {/* </div> */}
      </CardContent>

      <CardActions disableSpacing className={styles.urlContainer}>
        {props.x &&
          <Link href={getURL('x', props.id)}>X@{props.x}</Link>
        }
        {props.instagram &&
          <Link href={getURL('instagram', props.id)}>Instagram@{props.x}</Link>
        }
      </CardActions>
    </Card >
  );
}