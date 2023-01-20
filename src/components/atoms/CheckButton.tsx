import { FC } from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { BiCheckCircle } from "react-icons/bi";

type CheckButtonProps = {
  isDone: boolean;
};

export const CheckButton: FC<CheckButtonProps> = (isDone) => {
  return (
    <IconButton
      aria-label="checkCircle"
      color={isDone ? "green.700" : "gray.600"}
      variant="ghost"
      isRound
    >
      <Icon as={BiCheckCircle} w={6} h={6} />
    </IconButton>
  );
};
