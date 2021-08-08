import React from "react";
import { styled, useStyletron } from "styletron-react";
import Image from "next/image";
import image from "../../resources/chatIcon.jpg";

export default function Header({ userName }: { userName?: string }) {
  const Block = styled("div", (props) => ({
    width: "100%",
    height: "50px",
    backgroundColor: "whitesmoke",
    margin: "0",
    display: "flex",
    boxShadow: "0px 13px 10px -15px",
    justifyContent: "space-between",
  }));

  const [css] = useStyletron();
  return (
    <Block>
      <div
        className={css({
          display: "flex",
          margin: "10px",
          alignItems: "center",
        })}
      >
        {/* <SpanElement
          className={`material-icons-outlined ${css({
            margin: "0 10px -5px 10px",
          })}`}
        >
          chat_bubble_outline
        </SpanElement> */}
        <Image src={image} height={40} width={40}></Image>
        <span
          className={css({
            fontWeight: 600,
            fontSize: "18px",
            marginLeft: "10px",
          })}
        >
          Chat Application
        </span>
      </div>

      {/* {userName != undefined ? (
        <span
          className={css({
            fontSize: "18px",
            width: "min-content",
            margin: "auto 20px auto 0",
            fontWeight: 600,
            padding: "5px",
            ":hover": {
              color: "#1111c1",
              borderRadius: "5px",
              backgroundColor: "#aaa",
              cursor: "pointer",
            },
          })}
        >
          {userName}
        </span>
      ) : null} */}
      {userName ? <span className="user">{userName}</span> : null}
    </Block>
  );
}
