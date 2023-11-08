import { Box } from '@mui/material';
import { Details } from '@/types/Details'
import Link from 'next/link'

interface DisplayTextProps extends Details {
  isSNSId?: boolean;
}

export default function DisplayText({
  title = '',
  detail = '',
  url = '',
  isSNSId = false,
}: DisplayTextProps) {
  const containerStyle = {
    width: '100%',
    padding: '8px 20px',
  }
  const detailStyle = {
    paddingTop: '4px',
    paddingLeft: '12px',
  }

  return (
    <Box sx={containerStyle}>
      <p style={{ fontSize: '0.7rem' }}>{title}</p>
      <Box sx={detailStyle}>
        {isSNSId && '@'}
        {
          url
            ?
            <Link href={url}>{detail}</Link>
            :
            <span>{detail}</span>
        }
      </Box>
    </Box>
  )
}
