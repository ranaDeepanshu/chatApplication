import React from "react";
import { styled, useStyletron } from "styletron-react";
import { SpanElement } from "../reusable/html_element";
import Image from "next/image";
import image from "../../resources/chatIcon.jpg";

export default function Header() {
  const Block = styled("div", (props) => ({
    width: "100%",
    height: "50px",
    backgroundColor: "whitesmoke",
    margin: "0",
    display: "flex",
    boxShadow: "0px 13px 10px -15px",
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
        <SpanElement
          className={css({
            fontWeight: 600,
            fontSize: "18px",
            marginLeft: "10px",
          })}
        >
          Chat Application
        </SpanElement>
      </div>
    </Block>
  );
}
