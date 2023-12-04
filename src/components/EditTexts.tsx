import TextInput from '@/components/TextInput';

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
      <TextInput labelText='所属団体' value={props.organization} onChange={props.handleOrganization} placeHolder='○○大学' />
      <TextInput labelText='氏名' value={props.name} onChange={props.handleName} required placeHolder='小美保 太郎' />
      <TextInput labelText='XのユーザID' value={props.x} onChange={props.handleX} placeHolder='omihooo' />
      <TextInput labelText='instagramのユーザID' value={props.instagram} onChange={props.handleInstagram} placeHolder='who_omiho' />
    </>
  );
}
