import React from "react";

export default class Button1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    return (
      <button className="button1" onClick={this.handleCount}>
        {this.state.count}
      </button>
    );
  }
}
