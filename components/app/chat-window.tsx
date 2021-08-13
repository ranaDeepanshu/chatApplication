import MessageWindow from "./message-window";
import React from "react";
import InputWindow from "./input-message";
import { FriendContext } from "../../pages/user/[id]";
import { addMessages, getMessage } from "../../data/controller";

export interface messageType {
  text: string;
  id: string;
}

export default function ChatWindow() {
  const friendTalkingTo = React.useContext(FriendContext);
  const [messages, setMessages] = React.useState<messageType[]>(() => []);
  const inputElement = React.useRef<HTMLInputElement>(null);
  const friendId = React.useRef<string>(friendTalkingTo.friendId);

  React.useEffect(() => {
    // console.log(messages, "useEffect", friendTalkingTo.friendId);
    addMessages(friendId.current, messages);
    setMessages(getMessage(friendTalkingTo.friendId) || []);
    friendId.current = friendTalkingTo.friendId;
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
