const initialState = {
  room1: [
    {author: "User", text: "Hi!", createdTs: new Date()},
    {author: "bot", text: "Hi from bot!", createdTs: new Date()}
  ],
  room2: [{author: "User", text: "Hi!", createdTs: new Date()}],
}

export const messagesReducer = (state = initialState) => {
  return state;
}