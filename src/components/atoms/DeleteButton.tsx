import { FC } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

type DeleteButtonProps = {
  onClickEvent: () => void;
};

export const DeleteButton: FC<DeleteButtonProps> = ({ onClickEvent }) => {
  return (
    <IconButton
      color="red.700"
      aria-label="delete"
      variant="ghost"
      isRound
      onClick={onClickEvent}
    >
      <DeleteIcon w={5} h={5} />
    </IconButton>
  );
};
