import React from "react";
import { useTodoContext, Todo } from "../../store/todo-context";
import { Item } from "./styles";

interface TodoProps {
  todo: Todo;
}

export const TaskItem = ({ todo }: TodoProps) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <Item key={todo.id}>
      <div>
        <button onClick={() => toggleTodo(todo.id)}>
          {/* TODO: Icones */}
          {todo.completed ? <span>Completa</span> : <span>Pendente</span>}
        </button>
        <span>{todo.task}</span>
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
