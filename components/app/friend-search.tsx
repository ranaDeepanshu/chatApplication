import { useStyletron } from "styletron-react";
import React from "react";

interface propType {
  handleClick: () => void;
}

const FriendNameSearchMessageBar = React.forwardRef<HTMLInputElement, propType>(
  (props, ref) => {
    const [css] = useStyletron();
    const [searchValue, setSearchValue] = React.useState<string>("");

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
          ref={ref}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (e.target.value === "") props.handleClick();
          }}
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
          onClick={props.handleClick}
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
);

FriendNameSearchMessageBar.displayName = "FriendNameSearchMessageBar";
export default FriendNameSearchMessageBar;
