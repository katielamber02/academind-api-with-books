import data from "../data/table-data";
import {
  EDIT_ROW_SUCCEEDED,
  ADD_ROW_SUCCEEDED,
  DELETE_ROW_SUCCEEDED
} from "../types";

const tableReducer = (state = data, action) => {
  switch (action.type) {
    case EDIT_ROW_SUCCEEDED:
    case ADD_ROW_SUCCEEDED:
      return {
        ...state,
        [action.row.id]: action.row
      };
  }
  return state;
};

export default tableReducer;
