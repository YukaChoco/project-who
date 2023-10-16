import styles from '@/styles/creatText.module.css'
import TextInput from '@/conponents/TextInput'

interface Props {
  name:string;
  handleName:(event: React.ChangeEvent<HTMLInputElement>) => void;
  instagram:string;
  handleinstagram:(event: React.ChangeEvent<HTMLInputElement>) => void;
  x:string;
  handleX:(event: React.ChangeEvent<HTMLInputElement>) => void;
  organization:string;
  handleOrganization:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputTexts(props: Props) {
  return (
    <>
      <TextInput
        text="氏名"
        value={props.name}
        onChange={props.handleName}
      />
      <TextInput
        text="instagram"
        value={props.instagram}
        onChange={props.handleinstagram}
      />
      <TextInput
        text="X"
        value={props.x}
        onChange={props.handleX}
      />
      <TextInput
        text="所属団体"
        value={props.organization}
        onChange={props.handleOrganization}
      />
      <div className={styles.space} />
    </>
  )
}