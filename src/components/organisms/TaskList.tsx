import { FC } from 'react';
import { Stack, StackDivider } from '@chakra-ui/react';

import { Task } from '@/components/molecules/Task';
import { taskIF } from '@/types/type';

type TaskListProps = {
  taskList: taskIF[];
};
export const TaskList: FC<TaskListProps> = ({ taskList }) => {
  return (
    <Stack divider={<StackDivider />} spacing="4" w="600px">
      {taskList.map((task: taskIF) => (
        <Task key={task.id} task={task} />
      ))}
    </Stack>
  );
};
