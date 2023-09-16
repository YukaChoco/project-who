import * as React from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import styles from '@/styles/Login.module.css'
import IconButton from '@mui/material/IconButton';

export default function ShareButton() {
    return (
        <IconButton sx={{
            position: 'fixed',
            bottom: 40, /* 基準の位置を画面の一番下に指定する */
            right: 40, /* 基準の位置を画面の一番右に指定する */
            background: "#6F80BF",
            color: "white",
            ":hover": { background: "#6F80BF" },
        }}>
            <ShareOutlinedIcon fontSize="large" />
        </IconButton>



    );
}