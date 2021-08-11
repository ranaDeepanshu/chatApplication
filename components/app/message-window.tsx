import { useStyletron } from "styletron-react";

export default function MessageWindow() {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        height: "80vh",
        backgroundColor: "blue",
      })}
    ></div>
  );
}
