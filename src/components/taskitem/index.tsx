import React from "react";
import { useTodoContext, Todo } from "../../store/todo-context";
import { Item, ItemText } from "./styles";

interface TodoProps {
  todo: Todo;
}

export const TaskItem = ({ todo }: TodoProps) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <Item key={todo.id}>
      <div>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? (
            <span>
              <i className="fa-regular fa-circle-check"></i>
            </span>
          ) : (
            <span>
              <i className="fa-regular fa-clock"></i>
            </span>
          )}
        </button>
        <ItemText $isCompleted={todo.completed}>{todo.title}</ItemText>
      </div>
      <div>
        {/* TODO: navegar para página da tarefa */}
        <button>Editar</button>
        <button
          aria-label="Delete task"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Deletar
        </button>
      </div>
    </Item>
  );
};
