import React from "react";
import { useTodoContext } from "../../store/todo-context";
import { Container, StyledHeader, Brand, ClearBtn } from "./styles";
export default function Header() {
  const { todosList, clearCompleted } = useTodoContext();
  const pendingTasks = todosList.filter((todo) => !todo.completed);
  const completedTasks = todosList.filter((todo) => todo.completed);
  return (
    <StyledHeader>
      <Container>
        <Brand>Taskord</Brand>
        {todosList.length > 0 && (
          <div>
            {completedTasks.length > 0 && (
              <ClearBtn onClick={clearCompleted}>
                Limpar tarefas completadas
              </ClearBtn>
            )}
            <span>
              Total - {todosList.length} | Pendentes - {pendingTasks.length}
            </span>
          </div>
        )}
      </Container>
    </StyledHeader>
  );
}
