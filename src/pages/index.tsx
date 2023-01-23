import { FormEventHandler, useEffect, useState, FormEvent } from 'react';
import { deleteColorModeInLocalStorage } from '@/ui/theme';
import {
  Box,
  FormControl,
  Input,
  Stack,
  FormLabel,
  FormHelperText,
  Button,
  Spacer,
  Text,
  Link,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from '@chakra-ui/react';
import { NextPage, GetStaticProps, GetServerSideProps } from 'next';
import { supabase } from '../../utils/supabaseClient';

import { TaskList } from '@/components/organisms/TaskList';
// import { Header } from '@/components/molecules/Header';
import { InputTaskForm } from '@/components/organisms/InputTaskForm';
import { taskIF } from '@/types/type';
import { Layout } from '@/components/layout/Layout';
import { useMutateAuth } from '@/hooks/useMutateAuth';
import { CheckIcon, SettingsIcon } from '@chakra-ui/icons';

// const taskList: taskIF[] = [
//   {
//     id: 'cbwodcbodsc',
//     user_id: 'cecbceiw61',
//     content: '猫ちゃんとお遊び',
//     is_done: true,
//     created_at: '2022/2/12',
//   },
//   {
//     id: 'cbwicbiwdc',
//     user_id: 'cecbceiw61',
//     content: '猫ちゃんのお散歩',
//     is_done: false,
//     created_at: '2022/2/13',
//   },
//   {
//     id: 'cbwicbiwddew2334c',
//     user_id: 'cwcwdu1sxsxs21',
//     content: '犬ちゃんのお散歩',
//     is_done: false,
//     created_at: '2022/2/13',
//   },
//   {
//     id: 'ceceuosx232r32rr',
//     user_id: 'cwcwdu1sxsxs21',
//     content: '犬ちゃんとお遊び',
//     is_done: true,
//     created_at: '2022/2/13',
//   },
// ];

// export const getServerSideProps: GetServerSideProps = async () => {
//   console.log('getServerSideProps/ssr invoked');
//   const { data: tasks } = await supabase
//     .from('todos')
//     .select('*')
//     .order('created_at', { ascending: true });
//   console.log(tasks);

//   return {
//     props: {
//       tasks,
//     },
//   };
// };

// type StaticProps = {
//   tasks: taskIF[];
// };
const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = useMutateAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate();
    } else {
      registerMutation.mutate();
    }
  };
  // After 3s reset the localStorage
  // useEffect(() => {
  //   setTimeout(deleteColorModeInLocalStorage, 3000);
  // }, []);
  // const [taskList, setTaskList] = useState([]);

  // useEffect(() => {
  //   // const { data: tasks } = await supabase
  //   //   .from('todos')
  //   //   .select('*')
  //   //   .order('created_at', { ascending: true });
  // }, []);

  return (
    // <Layout>
    //   <TaskList taskList={} />
    //   <Box pos="fixed" zIndex={10} bottom="20">
    //     <InputTaskForm />
    //   </Box>
    // </Layout>

    <Layout>
      <Card variant="outline">
        <CardHeader>
          <Heading textAlign="center" size="md">
            {isLogin ? 'Login Form' : 'Signup Form'}
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                placeholder="Emailを入力"
                w="300px"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="Passwordを入力"
                w="300px"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Text
                cursor="pointer"
                textAlign="center"
                onClick={() => {
                  setIsLogin((prev) => !prev);
                }}
              >
                <SettingsIcon mr={2} />
                change mode ?
              </Text>
              <Button isLoading={false} type="submit">
                <CheckIcon mr={2} />
                {isLogin ? 'Login' : 'SignUp'}
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Home;
