import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Cards } from '@/types/Cards';
import styles from '@/styles/Cards.module.css'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function DisplayCard(props: Cards) {
  return (
    <Card className={styles.cards} sx={{ backgroundColor: `${props.bgColor}` }}>
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
          <Button size="small" >{props.x}</Button>
        }
        {props.instagram &&
          <Button size="small" >{props.instagram}</Button>
        }
      </CardActions>
    </Card>
  );
}