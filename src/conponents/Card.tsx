import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getURL } from '@/utils/ok/getURL';
import Link from 'next/link';
import type { CardData } from '@/types/CardData';
import { Box } from '@mui/material';

interface Props extends CardData {
  urlEnabled: boolean;
  onClickHandler?: () => void;
}

export default function DisplayCard(props: Props) {
  const onClick = props.urlEnabled ? props.onClickHandler : () => { };

  const cardStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.textColor}`,
    fontSize: '1rem',
    lineHeight: '1.1rem',
    width: '100%',
    padding: '20px',
  }
  const organizatinoStyle = {
    minHeight: '2.4rem',
  }
  const nameStyle = {
    textAlign: 'center',
    margin: '20px 0px',
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: '600',
  }
  const SNSUrlContainerStyle = {
    minHeight: '2.4rem',
    padding: '0px',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateClumns: '1fr',
  }
  const SNSUrlStyle = {
    minHeight: '1.2rem',
  }


  return (
    <Card sx={cardStyle} onClick={onClick}>
      <CardContent>
        <Typography sx={organizatinoStyle} >
          {props.organization}
        </Typography>
        <Typography sx={nameStyle} >
          {props.name}
        </Typography>
      </CardContent>

      <CardActions disableSpacing sx={SNSUrlContainerStyle}>
        <Box sx={SNSUrlStyle}>
          {props.x &&
            <Link href={getURL('x', props.id)}>X@{props.x}</Link>
          }
        </Box>
        <Box sx={SNSUrlStyle}>
          {props.instagram &&
            <Link href={getURL('instagram', props.id)}>Instagram@{props.instagram}</Link>
          }
        </Box>
      </CardActions>
    </Card >
  );
}