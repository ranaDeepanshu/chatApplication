import React from "react";
import { useStyletron } from "styletron-react";
import { getFriendList, getUser } from "../../data/controller";
import { FriendContext } from "../../pages/user/[id]";

type asideProps = {
  userId: string;
};

export default function Aside(props: asideProps) {
  const [friendList, setFriendList] = React.useState<string[]>(() => {
    return getFriendList(props.userId);
  });
  const [css] = useStyletron();

  const contextValue = React.useContext(FriendContext);

  return (
    <div
      className={css({
        width: "20%",
        backgroundColor: "whitesmoke",
        borderTop: "4px solid rebeccapurple",
        boxShadow: "13px 0px 10px -15px",
        display: "flex",
        flexDirection: "column",
        borderTopRightRadius: "5px",
      })}
    >
      {friendList.map((val) => {
        let name = getUser(val).name;
        return (
          <span
            key={val}
            className={css({
              width: "100% - 10px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor:
                contextValue.friendId === val ? "#0083ffb3" : "transparent",
              ":hover": {
                backgroundColor: "#c8c2c2",
                fontWeight: 600,
              },
              padding: "2px",
              margin: "5px 5px 0 5px",
              fontSize: "16px",
              borderRadius: "3px",
            })}
            onClick={() => contextValue.setFriend(val)}
          >
            {name}
          </span>
        );
      })}
    </div>
  );
}
