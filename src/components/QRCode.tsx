import { QRCodeCanvas } from 'qrcode.react';

interface QRCodeProps {
  url: string;
}

export default function QRCode({ url = 'https://project-who.vercel.app/cards' }: QRCodeProps) {
  return (
    <QRCodeCanvas
      value={url}
      size={200}
      bgColor={'#FFF'}
      fgColor={'#000'}
      level={'L'}
      includeMargin={false}
      imageSettings={{
        src: '',
        x: undefined,
        y: undefined,
        height: 60,
        width: 60,
        excavate: true,
      }}
    />
  );
}
