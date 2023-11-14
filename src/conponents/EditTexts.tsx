import TextInput from '@/conponents/TextInput';

interface EditTextsProps {
  name: string;
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  instagram: string;
  handleInstagram: (event: React.ChangeEvent<HTMLInputElement>) => void;
  x: string;
  handleX: (event: React.ChangeEvent<HTMLInputElement>) => void;
  organization: string;
  handleOrganization: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditTexts(props: EditTextsProps) {
  return (
    <>
      <TextInput labelText='所属団体' value={props.organization} onChange={props.handleOrganization} />
      <TextInput labelText='氏名' value={props.name} onChange={props.handleName} />
      <TextInput labelText='X' value={props.x} onChange={props.handleX} />
      <TextInput labelText='instagram' value={props.instagram} onChange={props.handleInstagram} />
    </>
  );
}
