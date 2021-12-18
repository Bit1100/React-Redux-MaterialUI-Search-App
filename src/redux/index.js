import { combineReducers } from "redux";
import { formReducer } from "./formUsers/formReducer";
import { filterReducer } from "./filterUsers/filterReducer";

export const reducer = combineReducers({
  form: formReducer,
  filter: filterReducer,
});

// All the Action Creators at one place
export { filterUsers } from "./filterUsers/filterAction";
export {
  addUsers,
  sortUsers,
  getUsers,
} from "./formUsers/formAction";
