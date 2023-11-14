import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { toXProfileURL, toInstagramProfileURL } from '@/utils/ok/toSNSProfileURL';
import Link from 'next/link';
import type { CardData } from '@/types/CardData';
import { Box } from '@mui/material';

interface CardProps extends Pick<CardData, 'organization' | 'name' | 'x' | 'instagram' | 'bgColor' | 'textColor'> {
  urlEnabled: boolean;
  onClickHandler?: () => void; //後に削除
  link?: string;
}

export default function DisplayCard({
  organization = '',
  name = '',
  x = '',
  instagram = '',
  bgColor = '#FFF',
  textColor = '#000',
  urlEnabled = false,
  onClickHandler = () => {}, //後に削除
  link = undefined,
}: CardProps) {
  const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${textColor}`,
    width: '100%',
    padding: '10px',
  };
  const organizatinoStyle = {
    padding: '5px',
    height: '2.4rem',
  };
  const nameStyle = {
    minHeight: '2.4rem',
    textAlign: 'center',
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '30px 0px',
  };
  const SNSUrlContainerStyle = {
    height: '2.4rem',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateClumns: '1fr',
  };
  const SNSUrlStyle = {
    minHeight: '1.2rem',
  };

  const UnwrappedCard = () => (
    <Card sx={cardStyle} onClick={onClickHandler}>
      <CardContent>
        <Typography sx={organizatinoStyle}>{organization}</Typography>
        <Typography sx={nameStyle}>{name}</Typography>

        <Box sx={SNSUrlContainerStyle}>
          <Box sx={SNSUrlStyle}>
            {x &&
              (urlEnabled && !link ? (
                <Link href={toXProfileURL(x)}>
                  <Typography>X@{x}</Typography>
                </Link>
              ) : (
                <Typography>X@{x}</Typography>
              ))}
          </Box>
          <Box sx={SNSUrlStyle}>
            {instagram &&
              (urlEnabled && !link ? (
                <Link href={toInstagramProfileURL(instagram)}>
                  <Typography>Instagram@{instagram}</Typography>
                </Link>
              ) : (
                <Typography>Instagram@{instagram}</Typography>
              ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} style={{ width: '100%' }}>
        <UnwrappedCard />
      </Link>
    );
  }
  return <UnwrappedCard />;
}
