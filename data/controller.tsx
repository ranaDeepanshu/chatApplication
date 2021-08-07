import { userList } from "./model";

export function getAuthenticated(username, password) {
  for (let user of userList) {
    if (user.id === username && user.password === password) {
      return { userId: user.id, currentFriend: user.friendList[0] };
    }
  }
  return {};
}
