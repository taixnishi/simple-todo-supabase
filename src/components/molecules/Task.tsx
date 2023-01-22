import { FC } from 'react';
import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react';

import { CheckButton } from '@/components/atoms/CheckButton';
import { DeleteButton } from '@/components/atoms/DeleteButton';
import { taskIF } from '@/types/type';
import { formatTimeToYMD } from 'utils/dayjs';

type TaskProps = {
  task: taskIF;
};

export const Task: FC<TaskProps> = ({ task }) => {
  const { content, is_done, created_at } = task;
  console.log(task);
  return (
    <Flex>
      <Box mr={2}>
        <CheckButton isDone={is_done} />
      </Box>
      <Box>
        <Heading size="sm">{content}</Heading>
        <Text fontSize="sm" color="gray.500">
          {formatTimeToYMD(created_at)}
        </Text>
      </Box>
      <Spacer />
      <DeleteButton />
    </Flex>
  );
};
