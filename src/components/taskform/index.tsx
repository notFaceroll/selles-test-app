import React, { useState } from "react";
import { CancelButton, ConfirmButton, Container, Form, Input } from "./styles";
import { Todo, useTodoContext } from "../../store/todo-context";

interface FormProps {
  isEditing?: boolean;
  todo?: Todo;
}

export default function TaskForm({ isEditing, todo }: FormProps) {
  const [title, setTitle] = useState(() => todo?.title ?? "");
  const [description, setDescription] = useState(() => todo?.description ?? "");
  const { addTodo } = useTodoContext();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!title || !description) return;
    addTodo(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <Container>
      <Form action="#" onSubmit={handleSubmit}>
        <div className="form-body">
          <Input
            type="text"
            placeholder="Qual a sua próxima tarefa?"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
          <hr />
          <Input
            type="text"
            placeholder="Qual a sua próxima tarefa?"
            as="textarea"
            className="area"
            value={description}
            onChange={({ target: { value } }) => setDescription(value)}
          />
        </div>
        <footer>
          <CancelButton>Voltar</CancelButton>
          <ConfirmButton disabled={!title || !description}>
            {isEditing ? "Atualizar" : "Criar"}
          </ConfirmButton>
        </footer>
      </Form>
    </Container>
  );
}
