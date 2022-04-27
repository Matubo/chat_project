import {
  ChatRoomsActions,
  ChatRoomsActionTypes,
} from "../../types/actions/CharRoomsActions";
import { IChatRooms } from "../../types/states/ChatRoomsTypes";

const initialState: IChatRooms = {
  rooms: {},
  currentRoom: null,
};

export const chatRoomsReducer = (
  state = initialState,
  action: ChatRoomsActions
): IChatRooms => {
  switch (action.type) {
    case ChatRoomsActionTypes.ADD_ROOM: {
      const { id, room } = action.payload;
      state.rooms[id] = room;
      return { ...state };
    }
    case ChatRoomsActionTypes.CHANGE_ROOM: {
      const { id } = action.payload;
      return { ...state, currentRoom: id };
    }
    case ChatRoomsActionTypes.SET_NEW_MESSAGE: {
      const { id, message } = action.payload;
      state.rooms[id].messages.push(message);
      return { ...state };
    }
    default:
      return state;
  }
};