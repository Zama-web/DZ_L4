import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { userReducer } from "./usersReducer";


export const rootReducer = combineReducers({
    title: titleReducer,
    users: userReducer
})