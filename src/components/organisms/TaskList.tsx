import { FC } from "react";
import { Stack, StackDivider } from "@chakra-ui/react";

import { Task } from "@/components/molecules/Task";

interface Task {
  id: string;
  uid: string;
  text: string;
  isDone: boolean;
  createdAt: string;
}

type TaskListProps = {
  taskList: Task[];
};
export const TaskList: FC<TaskListProps> = ({ taskList }) => {
  return (
    <Stack divider={<StackDivider />} spacing="4" w="600px">
      {taskList.map((task: Task) => (
        <Task key={task.id} task={task} />
      ))}
    </Stack>
  );
};
