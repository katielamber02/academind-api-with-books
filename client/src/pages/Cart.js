import React from "react";
import { connect } from "react-redux";

const sort = items => {
  return items.sort((a, b) => a.id < b.id);
};
function Cart(props) {
  const sotredItems = sort(props.cart);
  console.log(sotredItems);
  return (
    <table>
      <thead>
        <tr>
          <th>Image:</th>
          <th>Item:</th>
          <th>Quantity:</th>
        </tr>
      </thead>
      <tbody>
        {sotredItems.map(item => (
          <tr key={item.id}>
            <td>
              {
                <img
                  heigth={30}
                  title={item.name}
                  src={`products/123.gif`}
                  alt="text"
                />
              }
            </td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={e => props.addToCart(item)}>add</button>
            </td>
            <td>
              <button onClick={e => props.removeFromCart(item)}>remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch({ type: "ADD", payload: item }),
    removeFromCart: item => dispatch({ type: "REMOVE", payload: item })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
