import { FormEventHandler, useEffect, useState } from 'react';
import { deleteColorModeInLocalStorage } from '@/ui/theme';
import { Box } from '@chakra-ui/react';
import { NextPage, GetStaticProps, GetServerSideProps } from 'next';
import { supabase } from '../../utils/supabaseClient';

import { TaskList } from '@/components/organisms/TaskList';
// import { Header } from '@/components/molecules/Header';
import { InputTaskForm } from '@/components/organisms/InputTaskForm';
import { taskIF } from '@/types/type';
import { Layout } from '@/components/layout/Layout';

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

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('getServerSideProps/ssr invoked');
  const { data: tasks } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true });
  console.log(tasks);

  return {
    props: {
      tasks,
    },
  };
};

type StaticProps = {
  tasks: taskIF[];
};
const Home: NextPage<StaticProps> = ({ tasks }) => {
  // After 3s reset the localStorage
  // useEffect(() => {
  //   setTimeout(deleteColorModeInLocalStorage, 3000);
  // }, []);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // const { data: tasks } = await supabase
    //   .from('todos')
    //   .select('*')
    //   .order('created_at', { ascending: true });
  }, []);

  return (
    <Layout>
      <TaskList taskList={tasks} />
      <Box pos="fixed" zIndex={10} bottom="20">
        <InputTaskForm />
      </Box>
    </Layout>
  );
};

export default Home;
