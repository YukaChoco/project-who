import QRCode from "@/conponents/MakeQrcode"

export default function Home() {
  return (
    <main className="text-lg">
      <QRCode url="https://whooo.netlify.app/" />
    </main>
  )
}