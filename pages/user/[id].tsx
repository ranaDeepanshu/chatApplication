import { GetServerSideProps } from "next";
import { getUser } from "../../data/controller";
import { User } from "../../data/model";
import React from "react";
import Header from "../../components/app/header";
import Aside from "../../components/app/aside";
import FriendNameSearchMessageBar from "../../components/app/friend-search";
import MessageWindow from "../../components/app/mesage-window";
import InputWindow from "../../components/app/input-message";
import { useStyletron } from "styletron-react";

interface contextInterface {
  friendId: string;
  setFriend: React.Dispatch<React.SetStateAction<string>>;
}

export const FriendContext = React.createContext<contextInterface | null>(null);

export default function UserPage(props: { user: User }) {
  const [currentFriend, setCurrentFriend] = React.useState<string>(
    props.user.friendList[0]
  );

  const [css] = useStyletron();
  const NewHeader = React.useMemo(
    () => <Header userName={props.user.name}></Header>,
    []
  );

  return (
    <>
      {NewHeader}
      <FriendContext.Provider
        value={{ friendId: currentFriend, setFriend: setCurrentFriend }}
      >
        <div
          className={css({
            display: "flex",
            width: "100%",
            height: "93vh",
          })}
        >
          <Aside userId={props.user.id}></Aside>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              width: "80%",
            })}
          >
            <FriendNameSearchMessageBar></FriendNameSearchMessageBar>
            <MessageWindow></MessageWindow>
            <InputWindow></InputWindow>
          </div>
        </div>
      </FriendContext.Provider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let user = getUser(context.params.id as string);
  return {
    props: { user: user },
  };
};