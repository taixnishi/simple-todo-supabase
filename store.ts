import create from 'zustand';
import { editedTaskType } from '@/types/type';

type State = {
  editedTask: editedTaskType;
  updateEditedTask: (payload: editedTaskType) => void;
  resetEditedTask: () => void;
};

const useStore = create<State>((set) => ({
  editedTask: { id: '', content: '' },
  updateEditedTask: (payload) =>
    set({
      editedTask: {
        id: payload.id,
        content: payload.content,
      },
    }),
  resetEditedTask: () => set({ editedTask: { id: '', content: '' } }),
}));

export default useStore;
