import { FC } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type DeleteButtonProps = {};

export const DeleteButton: FC<DeleteButtonProps> = () => {
  return (
    <IconButton
      color="red.700"
      aria-label="delete"
      variant="ghost"
      isRound
      onClick={() => alert("本当に削除してもいいですか？")}
    >
      <DeleteIcon w={5} h={5} />
    </IconButton>
  );
};
