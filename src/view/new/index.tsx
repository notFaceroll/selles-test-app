import React from "react";
import TaskForm from "../../components/taskform";

export default function New() {
  return (
    <>
      <h1>NOVA TAREFA</h1>
      <TaskForm isEditing/>
    </>
  );
}
