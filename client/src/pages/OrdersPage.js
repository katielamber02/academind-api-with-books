import React from "react";
import Order from "../features/orders";

export default function OrdersPage(props) {
  return (
    <div>
      <Order id={props.match.params.id} />
    </div>
  );
}
