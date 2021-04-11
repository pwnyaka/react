import { MESSAGE_SEND } from "./types"

const initialState = {
  room1: [
    {author: "User", text: "Hi!", createdTs: new Date()},
    {author: "bot", text: "Hi from bot!", createdTs: new Date()}
  ],
  room2: [{author: "User", text: "Hi!", createdTs: new Date()}],
}

export const messagesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case MESSAGE_SEND:
      return {
        ...state,
        [payload.roomId]: [
            ...(state[payload.roomId] || []),
          {
            author: payload.author,
            text: payload.text,
            createdTs: new Date(),
          },
        ],
      }
    default:
      return state
  }
}