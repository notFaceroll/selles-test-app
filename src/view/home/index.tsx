import React from "react";
import TaskList from "../../components/tasklist";
import TaskForm from "../../components/taskform";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <TaskForm />
      <TaskList />
    </Container>
  );
}
