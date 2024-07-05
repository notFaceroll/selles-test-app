import React, { useState } from "react";
import TaskList from "../../components/tasklist";
import TaskForm from "../../components/taskform";

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsFormVisible(!isFormVisible)}>Nova</button>
      {isFormVisible && <TaskForm />}
      <TaskList />
    </>
  );
}
