import * as React from 'react';
import DisplayCard from './Card';
import Link from 'next/link';

export default function NewCard() {
    return (
        <Link href='/make/mycard'>
            <DisplayCard
                name="＋新規作成"
                organization=""
                x=""
                instagram=""
                urlEnabled
                textColor="#969696"
                bgColor="#F7F7F7"
            />
        </Link>
    )
}

