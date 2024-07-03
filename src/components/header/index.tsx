import React from "react";
import { useTodoContext } from "../../store/todo-context";
import { Container, StyledHeader, Brand } from "./styles";
export default function Header() {
  const { todosList } = useTodoContext();
  const pendingTasks = todosList.filter((todo) => !todo.completed);
  return (
    <StyledHeader>
      <Container>
        <Brand>Taskord</Brand>
        {todosList.length > 0 && (
          <div className="flex items-center justify-between gap-2">
            <span className="text-center text-neutral-200">
              Total - {todosList.length} | Pending - {pendingTasks.length}
            </span>
          </div>
        )}
      </Container>
    </StyledHeader>
  );
}
