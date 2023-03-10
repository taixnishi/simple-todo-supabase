import { FormEventHandler, FC } from 'react';
import { Input } from '@chakra-ui/react';
import { useMutateTask } from '@/hooks/query/useMutateTask';
import { supabase } from 'utils/supabaseClient';

export const InputTaskForm: FC = () => {
  const { createTaskMutation } = useMutateTask();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const { value: content } = (event.target as any).content;
    const {
      data: { user },
    } = await supabase.auth.getUser();

    createTaskMutation.mutate({
      content: content,
      user_id: user?.id,
    });
    (event.target as any).content.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="新しいタスクを入力..."
        maxW="600px"
        w={{ base: 300, md: 450, lg: 600 }}
        name="content"
        defaultValue=""
      />
    </form>
  );
};
