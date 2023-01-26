export interface taskIF {
  id: string;
  user_id: string | undefined;
  content: string;
  is_done: boolean;
  created_at: Date;
}

export type editedTaskType = Omit<taskIF, 'created_at' | 'user_id' | 'is_done'>;
