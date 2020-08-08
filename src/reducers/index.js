import { combineReducers } from "redux";

// Local imports
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
