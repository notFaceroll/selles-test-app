import React, { useState } from "react";
import { Todo, TodoContext } from "./todo-context";

interface TodoProviderProps {
  children: React.ReactNode;
}

export default function TodoProvider({ children }: TodoProviderProps) {
  const [todosList, setTodosList] = useState<Todo[]>([
    {
      task: "Fazer compras",
      completed: false,
      id: "1",
    },
    {
      task: "Estudar TypeScript",
      completed: true,
      id: "2",
    },
    {
      task: "Limpar o quarto",
      completed: false,
      id: "3",
    },
    {
      task: "Preparar o jantar",
      completed: true,
      id: "4",
    },
    {
      task: "Ir ao banco",
      completed: false,
      id: "5",
    },
  ]);

  const editTodo = (id: string, text: string) => {
    const updatedList = todosList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: text };
      }
      return todo;
    });
    setTodosList(updatedList);
  };

  const addTodo = (text: string) => {
    setTodosList([
      ...todosList,
      {
        task: text,
        completed: false,
        id: Math.random().toString(36).substring(2, 11),
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    const updatedList = todosList.filter((todo) => todo.id !== id);

    setTodosList(updatedList);
  };

  const toggleTodo = (id: string) => {
    const updatedList = todosList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodosList(updatedList);
  };

  const clearCompleted = () => {
    const completedTasks = todosList.filter((todo) => todo.completed);
    if (completedTasks.length === 0) {
      return;
    }

    const updatedList = todosList.filter((todo) => !todo.completed);

    setTodosList(updatedList);
  };

  const todoContext = {
    todosList,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    editTodo,
  };
  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
}
