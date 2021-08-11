import { useStyletron } from "styletron-react";

export default function FriendNameSearchMessageBar() {
  const [css] = useStyletron();
  return (
    <div className={css({ height: "30px", backgroundColor: "red" })}></div>
  );
}
