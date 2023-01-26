import { Layout } from '@/components/layout/Layout';
import { InputTaskForm } from '@/components/organisms/InputTaskForm';
import { TaskList } from '@/components/organisms/TaskList';
import { useQueryTasks } from '@/hooks/query/useQueryTasks';
import { Box, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import { supabase } from 'utils/supabaseClient';

const dashboard: NextPage = () => {
  return (
    <Layout>
      <TaskList />
      <Box pos="fixed" zIndex={10} bottom="20">
        <InputTaskForm />
      </Box>
    </Layout>
  );
};

export default dashboard;
