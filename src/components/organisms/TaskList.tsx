import { FC } from 'react';
import { Stack, StackDivider, Spinner, Text } from '@chakra-ui/react';

import { Task } from '@/components/molecules/Task';
import { taskIF } from '@/types/type';
import { useQueryTasks } from '@/hooks/query/useQueryTasks';

export const TaskList: FC = () => {
  const { data, status } = useQueryTasks();
  if (status === 'loading') return <Spinner pos="fixed" top="30%" />;
  if (status === 'error')
    return (
      <Text fontSize="3xl" pos="fixed" top="30%">
        {'Error'}
      </Text>
    );
  if (data?.length === 0)
    return (
      <Text pos="fixed" top="30%" fontSize="lg">
        現在登録されているタスクはありません
      </Text>
    );
  return (
    <Stack divider={<StackDivider />} spacing="4" w="600px">
      {data?.map((task: taskIF) => (
        <Task key={task.id} {...task} />
      ))}
    </Stack>
  );
};
