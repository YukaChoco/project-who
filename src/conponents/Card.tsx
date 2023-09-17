import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Cards } from '@/types/Cards';
import styles from '@/styles/Cards.module.css'
import router from 'next/router';

export default function DisplayCard(props: Cards) {
  const onClick = props.urlEnabled ? props.onClickHandler : () => { };
  const xURL = props.urlEnabled ? `https://twitter.com/${props.x}` : '';
  const InstagramUrl = props.urlEnabled ? `https://instagram.com/${props.instagram}` : '';

  return (
    <Card className={styles.cards} sx={{ backgroundColor: `${props.bgColor}` }} onClick={onClick}>
      <CardContent>
        <Typography className={styles.belong}>
          {props.organization}
        </Typography>

        <Typography className={styles.username} sx={{ color: `${props.textColor}` }}>
          {props.name}
        </Typography>

      </CardContent>

      {/* リンク遷移 */}
      <CardActions disableSpacing className={styles.wrap}>
        {props.x &&
          <Button size="small" onClick={() => router.push(xURL)}>@{props.x}</Button>
        }
        {props.instagram &&
          <Button size="small" onClick={() => router.push(InstagramUrl)} >@{props.instagram}</Button>
        }
      </CardActions>
    </Card >
  );
}