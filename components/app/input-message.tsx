import { useStyletron } from "styletron-react";
import React from "react";

type inputWindowProps = { handleClick: () => void };

const InputWindow = React.forwardRef<HTMLInputElement, inputWindowProps>(
  (props, ref) => {
    const [css] = useStyletron();
    const [message, changeMessageValue] = React.useState<string>("");

    const handleClick = () => {
      if (message) {
        changeMessageValue("");
        props.handleClick();
      }
    };

    return (
      <div
        className={css({
          display: "flex",
          backgroundColor: "#d9d8d8",
          padding: "15px 20px",
          marginTop: "5px",
        })}
      >
        <input
          type="text"
          ref={ref}
          value={message}
          onChange={(e) => changeMessageValue(e.target.value)}
          className={css({
            padding: "5px",
            fontSize: "20px",
            width: "80%",
            backgroundColor: "#edebeb;",
            marginLeft: "auto",
            borderRadius: "5px",
            ":focus": {
              backgroundColor: "#ebe9e2",
            },
          })}
        ></input>
        <button
          onClick={handleClick}
          className={css({
            marginRight: "auto",
            fontSize: "16px",
            marginLeft: "5px",
            backgroundColor: "#275EFE",
            border: "1px solid black",
            color: "white",
            borderRadius: "7px",
            ":hover": {
              backgroundColor: "#1749DB",
            },
          })}
        >
          Send Message
        </button>
      </div>
    );
  }
);

InputWindow.displayName = "InputMessageWindow";
export default InputWindow;
