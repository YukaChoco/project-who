import ColorPicker from '@/conponents/ColorPicker';

interface EditColorsProps {
  textColor: string;
  handleTextColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
  handleBgColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditColors(props: EditColorsProps) {
  return (
    <>
      <ColorPicker labelText='文字色' value={props.textColor} onChange={props.handleTextColor} />
      <ColorPicker labelText='背景色' value={props.bgColor} onChange={props.handleBgColor} />
    </>
  );
}
