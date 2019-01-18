import React from "react";

import fetchApi from "../../modules/fetch-api";

class Orders extends React.Component {
  state = {
    order: null
  };

  componentDidMount() {
    fetchApi(
      "get",
      `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
    ).then(json => {
      this.setState({
        order: json
      });
    });
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order;

    return (
      <div>
        <h3>Order info</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>

        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                //product,
                qty,
                product: { name, price }
              } = item;
              return (
                <li key={item.id}>
                  <img
                    heigth={30}
                    title={name}
                    src={`products/123.gif`}
                    alt="text"
                  />
                  {name}({qty} x ${price} = $
                  {parseFloat(qty) * parseFloat(price)})
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : "Loading...."}</div>;
  }
}

export default Orders;
