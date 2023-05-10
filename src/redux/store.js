import { createStore } from "redux";
import { PlantAiReducer } from "./reducer";

export const store = createStore(PlantAiReducer)