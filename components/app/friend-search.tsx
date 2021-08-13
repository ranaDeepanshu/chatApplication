import { useStyletron } from "styletron-react";
import React from "react";

export default function FriendNameSearchMessageBar() {
  const [css] = useStyletron();
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <div
      className={css({
        height: "30px",
        backgroundColor: "inherit",
        display: "flex",
        alignItems: "center",
      })}
    >
      <input
        className={css({
          width: "60%",
          height: "15px",
          marginLeft: "auto",
          ":focus": {
            outline: "none",
          },
        })}
      ></input>
      <button
        className={css({
          width: "5%",
          height: "21px",
          marginRight: "auto",
          backgroundColor: "blue",
          color: "white",
          marginLeft: "5px",
          borderRadius: "3px",
          border: "1px solid black",
        })}
      >
        search
      </button>
    </div>
  );
}
