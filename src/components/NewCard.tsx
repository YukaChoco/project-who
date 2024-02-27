import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function NewCard() {
  const cardStyle = {
    backgroundColor: '#F7F7F7',
    color: '#969696',
    width: '100%',
    padding: '10px',
  };
  const nameStyle = {
    minHeight: '2.4rem',
    textAlign: 'center',
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '40px 0px',
    padding: '2.4rem 0px',
  };

  return (
    <Link href={'/make/mycard'} style={{ width: '100%' }}>
      <Card sx={cardStyle}>
        <Box sx={nameStyle}>
          <Typography>データがありません</Typography>
          <Typography>（タップして編集）</Typography>
        </Box>
      </Card>
    </Link>
  );
}
