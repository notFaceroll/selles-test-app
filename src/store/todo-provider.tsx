import React, { useState } from "react";
import { Todo, TodoContext } from "./todo-context";

interface TodoProviderProps {
  children: React.ReactNode;
}

export default function TodoProvider({ children }: TodoProviderProps) {
  const [todosList, setTodosList] = useState<Todo[]>([
    {
      title: "Fazer compras",
      description: "BLEGH",
      completed: false,
      id: "1",
    },
    {
      title: "Estudar TypeScript",
      description: "BLEGH",
      completed: true,
      id: "2",
    },
    {
      title: "Limpar o quarto",
      description: "BLEGH",
      completed: false,
      id: "3",
    },
    {
      title: "Preparar o jantar",
      description: "BLEGH",
      completed: true,
      id: "4",
    },
    {
      title: "Ir ao banco",
      description: "BLEGH",
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

  const addTodo = (title: string, description: string) => {
    const updatedTodos = [
      ...todosList,
      {
        title,
        description,
        completed: false,
        id: Math.random().toString(36).substring(2, 11),
      },
    ]
    setTodosList(updatedTodos);

    localStorage.setItem('@todos', JSON.stringify(updatedTodos));
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
