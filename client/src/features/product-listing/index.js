import React, { Component } from "react";
import { connect } from "react-redux";
import fetchApi from "../../modules/fetch-api";

import ProductItem from "../product-item";

class ProductListing extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi(
      "get",
      "http://student-example-api.herokuapp.com/v1/products.json"
    ).then(json => {
      loadProducts(json);
    });
  }
  render() {
    const { products, cart } = this.props;
    console.log(products);

    return (
      <div className="product-list">
        {products.map(product => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={this.props.addToCart}
              removeFromCart={this.props.removeFromCart}
              cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: products => {
      dispatch({ type: "LOAD", payload: products });
    },
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
};
const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
