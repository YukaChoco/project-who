import { Box } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { Details } from '@/types/Details';
import Link from 'next/link';

interface DisplayTextProps extends Details {
  isSNSId?: boolean;
}

export default function DisplayText({ title = '', detail = '', url = '', isSNSId = false }: DisplayTextProps) {
  const containerStyle = {
    width: '100%',
    padding: '8px 20px',
  };
  const detailContainerStyle = {
    padding: '4px 12px',
  };
  const urlStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
  };

  return (
    <Box sx={containerStyle}>
      <p style={{ fontSize: '0.7rem' }}>{title}</p>
      <Box sx={detailContainerStyle}>
        {url ? (
          <Box sx={urlStyle}>
            <Link href={url}>
              {isSNSId && '@'}
              {detail}
            </Link>
            <LaunchIcon sx={{ fontSize: '1rem', height: '100%' }} />
          </Box>
        ) : (
          <span>
            {isSNSId && '@'}
            {detail}
          </span>
        )}
      </Box>
    </Box>
  );
}
