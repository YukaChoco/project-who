import ColorPicker from '@/components/ColorPicker';

interface EditColorsProps {
  textColor: string;
  handleTextColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bgColor: string;
  handleBgColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditColors(props: EditColorsProps) {
  const colorsValidate = (textColor: string, bgColor: string) => {
    if (textColor === bgColor) {
      return { error: true, helperText: '文字色と背景色は別の色を指定してください' };
    }
    return { error: false, helperText: '' };
  };
  const { error, helperText } = colorsValidate(props.textColor, props.bgColor);
  return (
    <>
      <ColorPicker labelText='文字色' value={props.textColor} onChange={props.handleTextColor} error={error} />
      <ColorPicker labelText='背景色' value={props.bgColor} onChange={props.handleBgColor} error={error} helperText={helperText} />
    </>
  );
}
