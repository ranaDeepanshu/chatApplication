import { messageType } from "../components/app/chat-window";

export interface User {
  id: string;
  name: string;
  password: string;
  friendList: string[];
}

export let userList: User[] = [
  {
    id: "1",
    name: "Deepanshu",
    password: "user1",
    friendList: ["2", "4", "5"],
  },
  {
    id: "2",
    name: "Raghav",
    password: "user2",
    friendList: ["2", "4", "5"],
  },
  {
    id: "3",
    name: "Aryan",
    password: "user3",
    friendList: ["2", "4", "5"],
  },
  {
    id: "4",
    name: "Aditya",
    password: "user4",
    friendList: ["2", "4", "5"],
  },
  {
    id: "5",
    name: "Kanishk",
    password: "user5",
    friendList: ["2", "4", "5"],
  },
];

export let messages: {
  [k: string]: messageType[];
} = {};

//min id of the two user will store the messages
