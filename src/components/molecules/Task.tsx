import { FC } from 'react';
import {
  Box,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Tooltip,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { CheckButton } from '@/components/atoms/CheckButton';
import { DeleteButton } from '@/components/atoms/DeleteButton';
import { taskIF } from '@/types/type';
import { formatTimeToYMD } from 'utils/dayjs';
import { useMutateTask } from '@/hooks/query/useMutateTask';

export const Task: FC<Omit<taskIF, 'user_id'>> = ({
  id,
  content,
  is_done,
  created_at,
}) => {
  const { deleteTaskMutation, toggeleTaskMutation } = useMutateTask();
  const handleDeleteTask = (id: string) => {
    const result = confirm('削除してもいいですか？');
    result && deleteTaskMutation.mutate(id);
  };
  const handleToggeleCheckIcon = (id: string, is_done: boolean): void => {
    const data = toggeleTaskMutation.mutate({ id, is_done });
    console.log('conponent toggele', data);
    // alert('handleToggeleCheckIcon is done');
  };
  return (
    <Flex>
      <Center mr={4}>
        <CheckButton
          isDone={is_done}
          onClickEvent={() => handleToggeleCheckIcon(id, is_done)}
        />
      </Center>
      <Box>
        <Tooltip placement='bottom-end' label={content}>
          <Text
            fontSize="lg"
            maxW="500px"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {content}
          </Text>
        </Tooltip>
        <Text fontSize="sm" color="gray.500">
          {formatTimeToYMD(created_at)}
        </Text>
      </Box>
      <Spacer />
      <DeleteButton onClickEvent={() => handleDeleteTask(id)} />
    </Flex>
  );
};
