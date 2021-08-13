import { useStyletron } from "styletron-react";
import { messageType } from "./chat-window";
import Message from "./message";

type MessageWindow = {
  messages: messageType[];
};

export default function MessageWindow(props: MessageWindow) {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        height: "80vh",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
      })}
    >
      {props.messages.map((message, idx) => {
        return <Message key={message.id} message={message}></Message>;
      })}
    </div>
  );
}
