import * as React from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export default function ShareButton() {
    return (
        <Link href={'/share'} aria-label="名刺共有画面に移動">
            <IconButton
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
        </Link>
    );
}