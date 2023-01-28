import { FC } from 'react';
import { Heading, Text, Image } from '@chakra-ui/react';
export const Header: FC = () => {
  return (
    <>
      <Heading mb={[6, 10]} fontSize={[20, 24, 32]}>
        TodoApp&nbsp;By&nbsp;
        <Image
          src="/supabase.svg"
          alt="supabase Logo"
          w={[4, 6]}
          display="inline"
          pr={1}
        />
        <Text as="span" color="green.400">
          Supabase
        </Text>
      </Heading>
    </>
  );
};
