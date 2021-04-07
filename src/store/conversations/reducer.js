const initialState = [
  {
    title: "room1",
    value: "",
    lastMessage: {author: "User", message: "Hi!", createdTs: new Date()},
  },
  {
    title: "room2",
    value: "",
    lastMessage: {author: "User", message: "Hi!", createdTs: new Date()},
  }
]

export const conversationsReducer = (state = initialState) => {
  return state;
}