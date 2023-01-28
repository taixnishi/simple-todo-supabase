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
    <Stack
      divider={<StackDivider />}
      spacing={[2, 3]}
      maxW="600px"
      w={[300, 450, 600]}
      maxH="460px"
      overflow="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: '5px',
          borderRadius: '10px',
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: `#4A5568`,
        },
      }}
    >
      {data?.map((task: taskIF) => (
        <Task key={task.id} {...task} />
      ))}
    </Stack>
  );
};
