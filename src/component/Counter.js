import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );
    this.setState((prevState)=>({
        count: prevState.count+1
    }))
  }
  decrement() {
    // this.setState(
    //   {
    //     count: this.state.count - 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );
    this.setState((prevState)=>({
        count : prevState.count-1
    }))
  }
  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    );
  }
}

export default Counter;
