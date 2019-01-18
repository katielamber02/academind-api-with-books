import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CheckoutForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="order[name]">Your name:</label>
            <br />
            <Field name="order[name]" component="input" type="text" />
          </div>

          <div>
            <label htmlFor="order[email]">Email:</label>
            <br />
            <Field name="order[email]" component="input" type="email" />
          </div>

          <div>
            <button type="submit">Submit order</button>
          </div>
        </form>
      </div>
    );
  }
}

CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
