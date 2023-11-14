import * as React from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import IconButton from '@mui/material/IconButton';
import router from 'next/router';

export default function ShareButton() {
    return (
        <IconButton
            onClick={() => router.push('/share')}
            size='large'
            sx={{
                position: 'fixed',
                bottom: 40,
                right: 40,
                background: "#6F80BF",
                color: "white",
                ":hover": { background: "#6F80BF" },
            }}>
            <ShareOutlinedIcon fontSize="large" />
        </IconButton>
    );
}