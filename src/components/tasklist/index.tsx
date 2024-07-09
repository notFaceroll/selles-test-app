import React from "react";
import { useTodoContext } from "../../store/todo-context";
import { List } from "./styles";
import TaskItem from "../taskitem";

export default function TaskList() {
  const { todosList } = useTodoContext();

  return (
    <List>
      {todosList.map((todo) => (
        <TaskItem todo={todo} key={todo.id} />
      ))}
    </List>
  );
}
