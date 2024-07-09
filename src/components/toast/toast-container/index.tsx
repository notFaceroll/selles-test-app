import React, { useCallback, useState, useEffect } from 'react';
import { Container } from './styles';
import { toastEventManager } from '../../../utils/show-toast';
import ToastMessage from '../toast-message';

type ToastMessageType = {
  id: number;
  text: string;
  duration?: number;
};

export default function ToastContainer() {
  const [messages, setMessages] = useState<ToastMessageType[]>([]);

  useEffect(() => {
    function handleAddToast({ text, duration }: ToastMessageType) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), text, duration },
      ]);
    }

    toastEventManager.on("addToast", handleAddToast);

    return () => {
      toastEventManager.removeListener("addToast", handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id: number) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
