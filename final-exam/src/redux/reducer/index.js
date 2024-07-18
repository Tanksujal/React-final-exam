import { combineReducers } from "redux";
import UserReducer from "./reducer";

const RootReducer = combineReducers({
    user : UserReducer
})
export default RootReducer