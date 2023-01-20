import { FC } from "react";
import { Heading, Text } from "@chakra-ui/react";

export const Header: FC = () => {
  return (
    <Heading mb={10}>
      TodoApp&nbsp;By&nbsp;
      <Text as="span" color="green.400">
        Supabase
      </Text>
    </Heading>
  );
};
