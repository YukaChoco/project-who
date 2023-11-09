import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { toXProfileURL, toInstagramProfileURL } from '@/utils/ok/toSNSProfileURL';
import Link from 'next/link';
import type { CardData } from '@/types/CardData';
import { Box, CardActionArea } from '@mui/material';
import { SNSType } from '@/types/SNSType';

interface CardProps
  extends Pick<CardData, 'organization' | 'name' | 'x' | 'instagram' | 'bgColor' | 'textColor'> {
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
  onClickHandler = () => { },
  link = undefined,
}: CardProps) {
  const SNSUrl = ({ snsType, snsUserId }: { snsType: SNSType, snsUserId: string }) => {
    if (!snsUserId) return <></>;

    if (urlEnabled) {
      return (
        <Link href={getURL(snsType, snsUserId)}>
          <Typography>{snsType}@{snsUserId}</Typography>
        </Link>
      )
    }
    return <Typography>{snsType}@{snsUserId}</Typography>
  }

  const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${textColor}`,
    width: '100%',
    padding: '10px'
  }
  const organizatinoStyle = {
    padding: '5px',
    height: '2.4rem',
  }
  const nameStyle = {
    minHeight: '2.4rem',
    textAlign: 'center',
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '30px 0px',
  }
  const SNSUrlContainerStyle = {
    height: '2.4rem',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateClumns: '1fr',
  }
  const SNSUrlStyle = {
    minHeight: '1.2rem',
  }

  const UnwrappedCard = () => (
    <Card sx={cardStyle} onClick={onClickHandler}>
      <CardActionArea>
        <CardContent>
          <Typography sx={organizatinoStyle} >{organization}</Typography>
          <Typography sx={nameStyle} >{name}</Typography>

          <Box sx={SNSUrlContainerStyle}>
            <Box sx={SNSUrlStyle}>
              <SNSUrl snsType={SNSType.X} snsUserId={x} />
            </Box>
            <Box sx={SNSUrlStyle}>
              <SNSUrl snsType={SNSType.Instagram} snsUserId={instagram} />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card >
  );

  if (link) {
    return (
      <Link href={link} style={{ width: '100%' }}>
        <UnwrappedCard />
      </Link>
    )
  }
  return (
    <UnwrappedCard />
  )
}