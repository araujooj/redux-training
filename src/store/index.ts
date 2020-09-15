import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { ICartReducer } from "./modules/cart/types";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export interface IState {
  cart: ICartReducer;
}

export default store;
