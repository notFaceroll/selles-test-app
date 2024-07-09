import React, { useState } from "react";
import {
  CancelButton,
  ConfirmButton,
  Container,
  Form,
  Input,
  NewTaskBtn,
} from "./styles";
import { Todo, useTodoContext } from "../../store/todo-context";

interface FormProps {
  todo?: Todo;
}

export default function TaskForm({ todo }: FormProps) {
  const [title, setTitle] = useState(() => todo?.title ?? "");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { addTodo, editTodo } = useTodoContext();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!title) {
      return;
    }

    if (todo) {
      editTodo(todo.id, title);
      return;
    }

    addTodo(title);
    setTitle("");
  }

  return (
    <Container>
      {!todo && !isFormVisible && (
        <NewTaskBtn onClick={() => setIsFormVisible(!isFormVisible)}>
          Nova tarefa
        </NewTaskBtn>
      )}
      {(isFormVisible || todo) && (
        <Form>
          <div className="form-body">
            <Input
              type="text"
              placeholder="Qual a sua próxima tarefa?"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
              as="textarea"
            />
          </div>
          <footer>
            {!todo && (
              <CancelButton onClick={() => setIsFormVisible(!isFormVisible)}>
                Voltar
              </CancelButton>
            )}
            <ConfirmButton
              type="button"
              disabled={!title}
              onClick={handleSubmit}
            >
              {todo ? "Atualizar" : "Criar"}
            </ConfirmButton>
          </footer>
        </Form>
      )}
    </Container>
  );
}
