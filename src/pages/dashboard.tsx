import { Layout } from '@/components/layout/Layout';
import { InputTaskForm } from '@/components/organisms/InputTaskForm';
import { TaskList } from '@/components/organisms/TaskList';
import { Box, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import { supabase } from 'utils/supabaseClient';

const dashboard: NextPage = () => {
  // const [taskList, setTaskList] = useState([]);
  const signout = async () => {
    // TODO
    // サインアウトしてもリロードするとdashboardに遷移する。
    await supabase.auth.signOut();
  };
  return (
    <Layout>
      {/* <TaskList taskList={tasks} /> */}
      <Button onClick={signout}>サインアウト</Button>
      <Box pos="fixed" zIndex={10} bottom="20">
        <InputTaskForm />
      </Box>
    </Layout>
  );
};

export default dashboard;
