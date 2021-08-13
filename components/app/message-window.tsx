import { useStyletron } from "styletron-react";
import { FilterContext } from "../../pages/user/[id]";
import { messageType } from "./chat-window";
import Message from "./message";
import React from "react";

type MessageWindow = {
  messages: messageType[];
};

export default function MessageWindow(props: MessageWindow) {
  const [css] = useStyletron();
  const filter = React.useContext(FilterContext);

  // console.log(filter);
  return (
    <div
      className={css({
        height: "80vh",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
      })}
    >
      {props.messages.map((message) => {
        if (filter) {
          if (message.text.includes(filter)) {
            console.log(filter);
            return <Message key={message.id} message={message}></Message>;
          } else return null;
        } else return <Message key={message.id} message={message}></Message>;
      })}
    </div>
  );
}
