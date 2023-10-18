import * as React from 'react';
import DisplayCard from './Card';
import router from 'next/router'

export default function MakeNewCard() {
    return (
        <DisplayCard
            id=""
            name="＋新規作成"
            organization=""
            x=""
            instagram=""
            others=""
            urlEnabled={true}
            textColor="#969696"
            bgColor="#F7F7F7"
            onClickHandler={() => router.push("/make/mycard")}
        />
    )
}

