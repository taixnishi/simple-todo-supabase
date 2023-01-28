import { supabase } from 'utils/supabaseClient';
import { useMutation, useQueryClient } from 'react-query';
import useStore from '../../../store';
import { editedTaskType, taskIF } from '@/types/type';
export const useMutateTask = () => {
  const queryClient = useQueryClient();
  const reset = useStore((state) => state.resetEditedTask);

  const createTaskMutation = useMutation(
    async (task: Omit<taskIF, 'id' | 'is_done' | 'created_at'>) => {
      const { data, error } = await supabase
        .from('todos')
        .insert(task)
        .select();
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        const previousTasks = queryClient.getQueryData<taskIF[]>(['todos']);
        if (previousTasks) {
          queryClient.setQueryData(['todos'], [...previousTasks, res[0]]);
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const updateTaskMutation = useMutation(
    async (task: editedTaskType) => {
      const { data, error } = await supabase
        .from('todos')
        .update({ content: task.content })
        .eq('id', task.id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res, variables) => {
        const previousTasks = queryClient.getQueryData<taskIF[]>(['todos']);
        if (previousTasks) {
          queryClient.setQueryData(
            ['todos'],
            previousTasks.map((task) => {
              return task.id === variables.id ? res[0] : task;
            })
          );
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const toggeleTaskMutation = useMutation(
    async (payload: Omit<taskIF, 'user_id' | 'created_at' | 'content'>) => {
      const { data, error } = await supabase
        .from('todos')
        .update({ is_done: !payload.is_done })
        .eq('id', payload.id)
        .select();
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res, variables) => {
        const previousTasks = queryClient.getQueryData<taskIF[]>(['todos']);
        if (previousTasks) {
          queryClient.setQueryData(
            ['todos'],
            previousTasks.map((task) => {
              return task.id === variables.id ? res[0] : task;
            })
          );
        }
      },
      onError: (err: any) => {
        alert(err.message);
      },
    }
  );

  // TODO: 完了ステータスはキャッシュの更新を行い高速化する。
  // キャッシュの有効期限が切れた場合に現在の値でsupabaseの更新を行う
  // const toggeleTaskMutation = useMutation(
  //   async (payload: Omit<taskIF, 'user_id' | 'created_at' | 'content'>) => {
  //     const previousTasks = queryClient.getQueryData<taskIF[]>(['todos']);
  //     if (previousTasks) {
  //       queryClient.setQueryData(
  //         ['todos'],
  //         previousTasks.map((task) => {
  //           return task.id === payload.id
  //             ? { ...task, is_done: !payload.is_done }
  //             : task;
  //         })
  //       );
  //     }

      // const { data, error } = await supabase
      //   .from('todos')
      //   .update({ is_done: !payload.is_done })
      //   .eq('id', payload.id)
      //   .select();
      // if (error) throw new Error(error.message);
      // return data;
    // }
    // {
    //   onSuccess: (res, variables) => {
    //     const previousTasks = queryClient.getQueryData<taskIF[]>(['todos']);
    //     if (previousTasks) {
    //       queryClient.setQueryData(
    //         ['todos'],
    //         previousTasks.map((task) => {
    //           return task.id === variables.id ? res[0] : task;
    //         })
    //       );
    //     }
    //   },
    //   onError: (err: any) => {
    //     alert(err.message);
    //   },
    // }
  // );

  const deleteTaskMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id)
        .select();
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (_, variables) => {
        const previousTasks = queryClient.getQueryData<taskIF[]>(['todos']);
        if (previousTasks) {
          const newTasks = previousTasks.filter(
            (task) => task.id !== variables
          );
          queryClient.setQueryData(['todos'], newTasks);
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  return {
    deleteTaskMutation,
    createTaskMutation,
    updateTaskMutation,
    toggeleTaskMutation,
  };
};
