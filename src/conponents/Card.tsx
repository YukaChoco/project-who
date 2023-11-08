import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getURL } from '@/utils/ok/getURL';
import Link from 'next/link';
import type { CardData } from '@/types/CardData';
import { Box } from '@mui/material';

interface CardProps
  extends Pick<CardData, 'organization' | 'name' | 'x' | 'instagram' | 'bgColor' | 'textColor'> {
  urlEnabled: boolean;
  onClickHandler?: () => void;
}

export default function DisplayCard({
  organization = '',
  name = '',
  x = '',
  instagram = '',
  bgColor = '#FFF',
  textColor = '#000',
  urlEnabled = false,
  onClickHandler = () => { },
}: CardProps) {

  const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${textColor}`,
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
        <Typography sx={organizatinoStyle} >{organization}</Typography>
        <Typography sx={nameStyle} >{name}</Typography>
      </CardContent>

      <CardActions disableSpacing sx={SNSUrlContainerStyle}>
        <Box sx={SNSUrlStyle}>
          {x &&
            <Link href={getURL('x', x)}>X@{x}</Link>
          }
        </Box>
        <Box sx={SNSUrlStyle}>
          {instagram &&
            <Link href={getURL('instagram', id)}>Instagram@{instagram}</Link>
          }
        </Box>
      </CardActions>
    </Card >
  );
}