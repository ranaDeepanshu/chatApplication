import { messageType } from "../components/app/chat-window";
import { messages, User, userList } from "./model";

export function getAuthenticated(username: string, password: string) {
  for (let user of userList) {
    if (user.id === username && user.password === password) {
      return { userId: user.id, currentFriend: user.friendList[0] };
    }
  }
  return {};
}

export function getUser(userId: string): User {
  for (let user of userList) {
    if (user.id === userId) {
      return user;
    }
  }
  return {} as User;
}

export function getFriendList(userId: string): string[] {
  return getUser(userId).friendList;
}

export function addMessages(userId: string, texts: messageType[]): void {
  // console.log(texts);
  messages[userId] = [...texts];
}

export function getMessage(userId: string) {
  return messages[userId];
}
