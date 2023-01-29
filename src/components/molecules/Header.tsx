import { FC } from 'react';
import { Heading, Text, Image } from '@chakra-ui/react';
export const Header: FC = () => {
  return (
    <>
      <Heading mb={{ base: 6, md: 10 }} fontSize={{ base: 24, md: 32, lg: 36 }}>
        TodoApp&nbsp;By&nbsp;
        <Image
          src="/supabase.svg"
          alt="supabase Logo"
          w={{ base: 5, md: 6, lg: 7 }}
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
