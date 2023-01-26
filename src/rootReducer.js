import { combineReducers } from "redux";
import homeSlice from "./pages/home/homeSlice";
import chatSlice from "./pages/chat/chatSlice";

export default combineReducers({
  home: homeSlice,
  chat: chatSlice,
});
