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
    password: "user1",
    friendList: ["2", "4", "5"],
  },
  {
    id: "3",
    name: "Aryan",
    password: "user1",
    friendList: ["2", "4", "5"],
  },
  {
    id: "4",
    name: "Aditya",
    password: "user1",
    friendList: ["2", "4", "5"],
  },
  {
    id: "5",
    name: "Kanishk",
    password: "user1",
    friendList: ["2", "4", "5"],
  },
];

export let messages: {
  [k: string]: { [k: string]: { message: string; sender: 1 | 0 }[] };
} = {
  "1": {
    "2": [
      {
        message: "How are You",
        sender: 1,
      },
      {
        message: "I am fine Thank You",
        sender: 0,
      },
    ],
  },
};

//min id of the two user will store the messages
