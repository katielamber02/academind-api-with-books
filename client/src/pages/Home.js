import React from "react";

import ProductListing from "./../features/product-listing/index";
//import data from "../data/products.json";

export default function Home(props) {
  return (
    <div>
      <h1>Homepage</h1>
      <ProductListing />
    </div>
  );
}
