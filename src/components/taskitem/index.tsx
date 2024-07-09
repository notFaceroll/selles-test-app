import React from "react";
import { useTodoContext, Todo } from "../../store/todo-context";
import { Item, ItemText, Toggle, TrashButton } from "./styles";
import { Link } from "react-router-dom";

interface TodoProps {
  todo: Todo;
}

export default function TaskItem({ todo }: TodoProps) {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <Item key={todo.id}>
      <div>
        <Toggle onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? (
            <span>
              <i className="fa-regular fa-circle-check"></i>
            </span>
          ) : (
            <span>
              <i className="fa-regular fa-clock"></i>
            </span>
          )}
        </Toggle>
        <ItemText $isCompleted={todo.completed}>{todo.title}</ItemText>
      </div>
      <div className="btn-group">
        <Link to={`/task/${todo.id}`} state={todo}>
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
        <TrashButton
          aria-label="Delete task"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </TrashButton>
      </div>
    </Item>
  );
}
