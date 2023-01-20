import { FormEventHandler, FC } from "react";
import { Input } from "@chakra-ui/react";

export const InputTaskForm: FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { value: task } = (event.target as any).task;
    console.log(task);
    (event.target as any).task.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="新しいタスクを入力..."
        w="600px"
        name="task"
        defaultValue=""
      />
    </form>
  );
};
