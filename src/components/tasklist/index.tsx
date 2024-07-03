import React from "react";
import { useTodoContext } from "../../store/todo-context";
import { TaskItem } from "../taskitem";
import { ClearBtn, Container, List } from "./styles";

export default function TaskList() {
  const { todosList, clearCompleted } = useTodoContext();

  const completedTasks = todosList.filter((todo) => todo.completed);

  console.log({ todosList })
  return (
    <Container>
      <List>
        {todosList.map((todo) => (
          <TaskItem todo={todo} key={todo.id} />
        ))}
      </List>
      {completedTasks.length > 0 && (
        <ClearBtn
          aria-label="Clear All Completed Tasks"
          onClick={clearCompleted}
        >
          Clear Completed Tasks
        </ClearBtn>
      )}
    </Container>
  );
}
