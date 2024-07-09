import React, { useCallback, useEffect, useState } from "react";
import { Todo, TodoContext } from "./todo-context";
import { showToast } from "../utils/show-toast";

interface TodoProviderProps {
  children: React.ReactNode;
}

export default function TodoProvider({ children }: TodoProviderProps) {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const fetchTodos = useCallback(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
  
      const result: Todo[] = await response.json();
      const todos = result.slice(0, 10);
  
      setTodosList(todos);
      storeTodos(todos);
    } catch (error) {
      console.error("Ocorreu um erro ao tentar buscar os todos:", error);
    }
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("@todos");
  
    if (!storedData || JSON.parse(storedData).length === 0) {
      fetchTodos();
    } else {
      setTodosList(JSON.parse(storedData) as Todo[]);
    }
  }, [fetchTodos]);

  const storeTodos = (todos: Todo[]) => {
    localStorage.setItem("@todos", JSON.stringify(todos));
  };

  const editTodo = (id: string, title: string) => {
    const updatedList = todosList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });

    showToast({ text: "Tarefa atualizada com sucesso!", duration: 5000 });
    setTodosList(updatedList);
    storeTodos(updatedList);
  };

  const addTodo = (title: string) => {
    const updatedTodos = [
      ...todosList,
      {
        title,
        completed: false,
        id: Math.random().toString(36).substring(2, 11),
      },
    ];

    setTodosList(updatedTodos);
    storeTodos(updatedTodos);
    showToast({ text: "Tarefa criada com sucesso!", duration: 5000 });
  };

  const deleteTodo = (id: string) => {
    const updatedList = todosList.filter((todo) => todo.id !== id);

    setTodosList(updatedList);
    storeTodos(updatedList);
    showToast({ text: "Tarefa removida com sucesso!", duration: 5000 });
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
    storeTodos(updatedList);
  };

  const clearCompleted = () => {
    const completedTasks = todosList.filter((todo) => todo.completed);
    if (completedTasks.length === 0) {
      return;
    }

    const updatedList = todosList.filter((todo) => !todo.completed);

    setTodosList(updatedList);
    storeTodos(updatedList);
    showToast({ text: "Tarefas removidas com sucesso!", duration: 5000 });
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
