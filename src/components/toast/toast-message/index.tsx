import { useEffect } from 'react';
import React from 'react';
import { Container } from './styles';

interface ToastMessageType {
  id: number;
  text: string;
  duration?: number;
}

interface ToastMessageProps {
  message: ToastMessageType;
  onRemoveMessage: (id: number) => void;
}

export default function ToastMessage({
  onRemoveMessage, message,
}: ToastMessageProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container onClick={handleRemoveToast} tabIndex={0} role="button">
      <strong>{message.text}</strong>
    </Container>
  );
}
