import styles from '@/styles/creatText.module.css'
import ColorPicker from '@/conponents/ColorPicker'


interface Props {
    textColor: string;
    handleTextColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
    bgColor: string;
    handleBgColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputColors(props: Props) {
  return (
    <>
        <ColorPicker text="文字色" value={props.textColor} onChange={props.handleTextColor} />
        <ColorPicker text="背景色" value={props.bgColor} onChange={props.handleBgColor} />

        <div className={styles.space} />
    </>
  )
}