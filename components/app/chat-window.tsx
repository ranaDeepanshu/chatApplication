import MessageWindow from "./message-window";
import React from "react";
import InputWindow from "./input-message";
import { FriendContext } from "../../pages/user/[id]";

interface chatWindowProps {
  filter: string;
}

export interface messageType {
  text: string;
  id: string;
}

export default function ChatWindow(props: chatWindowProps) {
  const [messages, setMessages] = React.useState<messageType[]>([]);
  const inputElement = React.useRef<HTMLInputElement>(null);
  const friendTalkingTo = React.useContext(FriendContext);

  React.useEffect(() => {
    setMessages([]);
  }, [friendTalkingTo.friendId]);

  const handleClick = () => {
    const message = inputElement.current.value;
    setMessages([{ text: message, id: messages.length + "" }, ...messages]);
  };

  return (
    <>
      <MessageWindow messages={messages}></MessageWindow>
      <InputWindow ref={inputElement} handleClick={handleClick}></InputWindow>
    </>
  );
}
