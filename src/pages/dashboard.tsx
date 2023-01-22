import { Layout } from '@/components/layout/Layout';
import { InputTaskForm } from '@/components/organisms/InputTaskForm';
import { TaskList } from '@/components/organisms/TaskList';
import { Box } from '@chakra-ui/react';

const dashboard = () => {
  return (
    <Layout>
      {/* <TaskList taskList={tasks} /> */}
      <Box pos="fixed" zIndex={10} bottom="20">
        <InputTaskForm />
      </Box>
    </Layout>
  );
};

export default dashboard;
