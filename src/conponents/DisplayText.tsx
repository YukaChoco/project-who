import { Box } from '@mui/material';
import { Details } from '@/types/Details'
import Link from 'next/link'

interface Props extends Details {
  isSNSId?: boolean;
}

export default function DisplayText(props: Props) {
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
      <p style={{ fontSize: '0.7rem' }}>{props.title}</p>
      <Box sx={detailStyle}>
        {props.isSNSId && '@'}
        {
          props.url
            ?
            <Link href={props.url}>{props.detail}</Link>
            :
            <span>{props.detail}</span>
        }
        {props.isSNSId && '@'}
      </Box>
    </Box>
  )
}
