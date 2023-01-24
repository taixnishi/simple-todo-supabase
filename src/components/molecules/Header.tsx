import { FC } from 'react';
import { Heading, Text, Image } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
export const Header: FC = () => {
  return (
    <Heading mb={10}>
      TodoApp&nbsp;By&nbsp;
      <Image
        src="/supabase.svg"
        alt="supabase Logo"
        width={6}
        display="inline"
        pr={1}
      />
      <Text as="span" color="green.400">
        Supabase
      </Text>
    </Heading>
  );
};
