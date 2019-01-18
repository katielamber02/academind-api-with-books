import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./productsReducer";
import { reducer as formReducer } from "redux-form";
import tableReducer from "./table";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer,
  rows: tableReducer
});

export default reducers;
