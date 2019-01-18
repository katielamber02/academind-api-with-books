import React, { Component } from "react";
import { connect } from "react-redux";
import { editRow, deleteRow } from "../actions";
import RowHeadings from "../features/table/headings";
import CheckoutForm from "./../features/checkout-form/index";

class Table extends Component {
  onChange = event => {
    const { editRow, deleteRow } = this.props;
    const { value } = event.target;
    console.log(value);
  };
  render() {
    const { rows } = this.props;

    console.log("rows as array:", rows);
    return (
      <div style={styles.table}>
        <RowHeadings />
        {rows.map(row => {
          return (
            <div style={styles.row} key={row.id}>
              <div style={styles.cell}>{row.checkNo}</div>
              <div style={styles.cell}>{row.payee}</div>
              <div style={styles.cell}>{row.amount}</div>
              <div style={styles.cell}>{row.isVoid ? "Void" : "-"}</div>
              <div style={styles.cell}>{row.status}</div>
              <div style={styles.cell}>
                <select onChange={this.onChange}>
                  <option>Options</option>
                  <option value="edit">Edit/Add</option>
                  <option value="delete">Delete</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = ({ rows }) => {
  console.log("initial rows as object:", rows);
  return {
    rows: rows ? Object.values(rows) : []
  };
};

const styles = {
  table: {
    margin: 60
  },
  row: {
    display: "flex",
    flexBasis: 0,
    borderBottom: "1px solid #ccc",
    height: 40,
    alignItems: "center"
  },
  cell: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  }
};
export default connect(
  mapStateToProps,
  { editRow, deleteRow }
)(Table);
