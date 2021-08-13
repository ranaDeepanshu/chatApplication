import { useStyletron } from "styletron-react";
import { messageType } from "./chat-window";
import React from "react";

interface messageComponentType {
  message: messageType;
}

function MessageComp(props: messageComponentType) {
  const [css] = useStyletron();
  return (
    <span
      className={css({
        width: "35%",
        backgroundColor: "#d85ad8",
        color: "black",
        fontWeight: 600,
        padding: "10px",
        position: "relative",
        margin: "10px",
        borderRadius: "10px",
        "::after": {
          content: "' '",
          position: "absolute",
          right: "20px",
          bottom: "-10px",
          borderTop: "15px solid #d85ad8",
          borderBottom: "none",
          borderRight: "15px solid transparent",
          borderLeft: "15px solid transparent",
        },
      })}
    >
      {props.message.text}
    </span>
  );
}

const Message = React.memo(MessageComp);

export default Message;
