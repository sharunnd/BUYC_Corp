import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as loginReducer } from "./loginReducer/reducer";
import { reducer as signupReducer } from "./signupReducer/reducer";
import { reducer as oemReducer } from "./oemReducer/reducer";
import { reducer as carsReducer } from "./carsReducer/reducer";
const rootReducer = combineReducers({
loginReducer,
signupReducer,
oemReducer,
carsReducer
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);