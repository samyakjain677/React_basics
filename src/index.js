import React from "react";
import ReactDOM from "react-dom";
import Add from "./Add";
import Sub from "./Sub";
import "./styles.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: ++this.state.count
    });
  };
  decrement = () => {
    this.setState({
      count: --this.state.count
    });
  };

  render() {
    return (
      <div>
        <Add text="Increment" onClick={this.increment} />
        <Sub text="Decrement" onClick={this.decrement} />
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
