import {
  EDIT_ROW_SUCCEEDED,
  ADD_ROW_SUCCEEDED,
  DELETE_ROW_SUCCEEDED
} from "../types";

export function editRow(row) {
  return {
    type: EDIT_ROW_SUCCEEDED,
    row
  };
}
// export function addRow=(row)=>{
//   return{
//     type:ADD_ROW_SUCCEEDED,
//     row
//   }
// }
export function deleteRow(id) {
  return {
    type: DELETE_ROW_SUCCEEDED,
    id
  };
}
