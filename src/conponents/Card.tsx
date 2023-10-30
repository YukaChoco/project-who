import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Card.module.css'
import { getURL } from '@/utils/ok/getURL';
import Link from 'next/link';
import type { GetCardData } from '@/types/CardData';

interface Props extends GetCardData {
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
          <Link href={getURL('x', props.x)}>X@{props.x}</Link>
        }
        {props.instagram &&
          <Link href={getURL('instagram', props.instagram)}>Instagram@{props.instagram}</Link>
        }
      </CardActions>
    </Card >
  );
}