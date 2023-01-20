import { FC } from "react";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

import { CheckButton } from "@/components/atoms/CheckButton";
import { DeleteButton } from "@/components/atoms/DeleteButton";

interface Task {
  id: string;
  uid: string;
  text: string;
  isDone: boolean;
  createdAt: string;
}

type TaskProps = {
  task: Task;
};

export const Task: FC<TaskProps> = ({ task }) => {
  const { text, createdAt, isDone } = task;
  return (
    <Flex>
      <Box mr={2}>
        <CheckButton isDone={false} />
      </Box>
      <Box>
        <Heading size="sm">{text}</Heading>
        <Text fontSize="sm" color="gray.500">
          2022/1/21
        </Text>
      </Box>
      <Spacer />
      <DeleteButton />
    </Flex>
  );
};
