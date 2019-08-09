import React, { Component } from "react";
import { connect } from "dva";

const mapStateToProps = state => {
  return state;
};

@connect(mapStateToProps)

class Home extends Component {
  render() {
    return (
      <div>
        this is home page
        <button
          onClick={() => {
            this.props.dispatch({ type: "app/add", values: "hello world" });
          }}
        >
          按钮
        </button>
      </div>
    );
  }
}

export default Home;
