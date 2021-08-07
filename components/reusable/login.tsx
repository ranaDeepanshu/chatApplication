import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React from "react";
import { styled, useStyletron } from "styletron-react";
import { getAuthenticated } from "../../data/controller";
import user from "../../resources/user.png";
import ImageElement from "./imageElement";

export default function Login() {
  const router = useRouter();
  const [css] = useStyletron();

  const userNameRef = React.useRef<HTMLInputElement>();
  const passwordRef = React.useRef<HTMLInputElement>();

  const handleClick = () => {
    const { userId } = getAuthenticated(
      userNameRef.current.value,
      passwordRef.current.value
    );
    router.push(`/user/${userId}`);
  };

  return (
    <div
      className={css({
        margin: "100px auto auto auto",
        width: "40%",
        borderRadius: "5px",
        backgroundColor: "whitesmoke",
      })}
    >
      <div
        className={css({
          height: "3px",
          backgroundColor: "rebeccapurple",
          borderRadius: "5px 5px 0 0",
        })}
      ></div>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          width: "100% - 40px",
        })}
      >
        <ImageElement
          className={css({
            width: "20%",
            height: "20%",
            margin: "0 auto 5px auto",
          })}
          src={user}
        ></ImageElement>

        <StyleLabelInput text="UserName" ref={userNameRef}></StyleLabelInput>

        <StyleLabelInput text="PassWord" ref={passwordRef}></StyleLabelInput>
        <button
          onClick={handleClick}
          className={css({
            width: "50%",
            height: "30px",
            margin: "20px auto 0 auto",
            backgroundColor: "#5a24aa",
            borderRadius: "5px",
            fontSize: "16px",
            color: "white",
            border: "none",
            ":hover": {
              outline: "none",
              backgroundColor: "#5a24aae0",
            },
          })}
        >
          LogIn
        </button>
      </div>
    </div>
  );
}

const StyleLabelInput = React.forwardRef(
  (
    { text }: { text: string },
    ref: React.MutableRefObject<HTMLInputElement>
  ) => {
    const [css] = useStyletron();
    const [state, setState] = React.useState<string>("");
    console.log(state);
    return (
      // <LabelInputContainer>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          margin: "5px 0 5px 0",
          padding: "0 20px",
        })}
      >
        <label htmlFor={text} className={css({ fontSize: "20px" })}>
          {text}
        </label>
        <input
          id={text}
          ref={ref}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={css({
            border: "none",
            backgroundColor: "transparent",
            width: "70%",
            fontSize: "16px",
            borderBottom: "1px solid black",
            textAlign: "center",
            ":focus": {
              backgroundColor: "transparent",
              outline: "none",
              borderBottom: "2px solid rebeccapurple",
              marginBottom: "-1px",
            },
          })}
          placeholder={`Enter Your ${text} here`}
        ></input>
      </div>
      // </LabelInputContainer>
    );
  }
);
