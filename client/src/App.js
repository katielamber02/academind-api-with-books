import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import Router from "./Router";
import { connect } from "react-redux";

const Navigation = ({ cart }) => (
  <nav>
    <ul className="top-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/cart">
          Cart(
          {cart.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
          )
        </NavLink>
      </li>

      <li>
        <NavLink to="/checkout">Checkout</NavLink>
      </li>
      <li>
        <NavLink to="/table">Table</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />
        <Router />
        FOOTER
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default withRouter(connect(mapStateToProps)(App));
