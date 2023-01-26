import { useQuery } from 'react-query';
import { supabase } from 'utils/supabaseClient';
import { taskIF } from '@/types/type';

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw new Error(`getTasksのerror ${error.message}`);
    return data;
  };

  // 【useQueryのシンプルな使い方】
  // const data = useQuery(【unique key】, fetch関数)
  // 【Example】
  // const info = useQuery('todos', fetchTodoList)
  // 【useQueryの型】
  // useQuery<取得するデータ型, Error>([取得するデータのkey], データ取得関数)
  return useQuery<taskIF[], Error>({
    queryKey: ['todos'],
    queryFn: getTasks,
    staleTime: Infinity,
  });
};
