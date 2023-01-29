import { Layout } from '@/components/layout/Layout';
import { InputTaskForm } from '@/components/organisms/InputTaskForm';
import { TaskList } from '@/components/organisms/TaskList';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

const dashboard: NextPage = () => {
  return (
    <Layout>
      <TaskList />
      <Box pos="fixed" zIndex={10} bottom={{ base: 5, sm: 10, md: 20 }}>
        <InputTaskForm />
      </Box>
    </Layout>
  );
};

export default dashboard;
