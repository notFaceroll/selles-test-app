import EventManager from "./event-manager";

export type ToastMessageType = {
    id: number;
    text: string;
    duration?: number;
  };

export const toastEventManager = new EventManager<ToastMessageType>();

export const showToast = ({
  text,
  duration,
}: {
  text: string;
  duration: number;
}) => {
  toastEventManager.emit("addToast", { id: Math.random(), text, duration });
};
