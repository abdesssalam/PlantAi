import { createStoreHook } from "react-redux";
import { userReducer } from "./reducer";

export const store = createStoreHook(userReducer)