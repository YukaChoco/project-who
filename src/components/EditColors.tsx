import ColorPicker from '@/components/ColorPicker';

interface EditColorsProps {
  textColor: string;
  handleTextColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
  handleBgColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditColors(props: EditColorsProps) {
  return (
    <>
      <ColorPicker labelText='文字色' value={props.textColor} onChange={props.handleTextColor} required />
      <ColorPicker labelText='背景色' value={props.bgColor} onChange={props.handleBgColor} required />
    </>
  );
}
