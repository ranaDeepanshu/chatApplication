import MessageWindow from "./message-window";
import React from "react";
import { useStyletron } from "styletron-react";

interface chatWindowProps {
  filter: string;
}

export default function ChatWindow(props: chatWindowProps) {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [css] = useStyletron();
  return (
    <>
      <MessageWindow></MessageWindow>
      <div>
        <input type="text"></input>
        <button>Send Message</button>
      </div>
    </>
  );
}
