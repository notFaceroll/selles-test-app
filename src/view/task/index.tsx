import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Todo } from "../../store/todo-context";
import TaskForm from "../../components/taskform";
import { Button, Container } from "./styles";

export default function Task() {
  const state = useLocation().state as Todo;
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate("/")}>Voltar</Button>
      <TaskForm todo={state} />
    </Container>
  );
}
