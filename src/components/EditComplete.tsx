import Box from '@mui/material/Box';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

interface EditCompletedProps {
  handleReturned: () => void;
  handleCompleted: () => void;
}

export default function EditComplete({ handleReturned = () => {}, handleCompleted = () => {} }: EditCompletedProps) {
  const containerStyles = {
    margin: '15px 0px',
  };
  return (
    <div>
      <Box sx={containerStyles}>
        <PrimaryButton text='編集に戻る' onClick={handleReturned} />
      </Box>
      <Box sx={containerStyles}>
        <SecondaryButton text='保存して終了' onClick={handleCompleted} />
      </Box>
    </div>
  );
}
