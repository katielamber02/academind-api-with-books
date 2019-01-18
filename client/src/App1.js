import React, { Component } from "react";

export default class App1 extends Component {
  componentDidMount() {
    fetch("https://learnwebcode.github.io/json-example/animals-1.json")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log("failed", error));
  }

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
