"use client";

import { QRCodeCanvas } from "qrcode.react";
import { FC } from "react";

interface QRCodeProps {
  url: string;
}

const QRCode: FC<QRCodeProps> = (props) => {
  return (
    <QRCodeCanvas
      value={props.url}
      size={200}
      bgColor={"#FFF"}
      fgColor={"#000"}
      level={"L"}
      includeMargin={false}
      imageSettings={{
        src: "/favicon.ico",
        x: undefined,
        y: undefined,
        height: 60,
        width: 60,
        excavate: true,
      }}
    />
  );
};

export default QRCode;