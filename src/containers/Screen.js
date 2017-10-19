// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScreenInfo from "../components/Screen";

const flowTest = (a: string, b: number): boolean => {
  if (a && b) {
    return true;
  }
  return false;
};

class Screen extends Component {
  static propTypes = {
    windowWidth: PropTypes.number,
    windowHeight: PropTypes.number
  };
  render() {
    console.log(flowTest("aa", "2"));
    const { windowWidth, windowHeight } = this.props;
    return <ScreenInfo height={windowHeight} width={windowWidth} />;
  }
}

export default connect(state => ({
  windowHeight: state.windowState.windowHeight,
  windowWidth: state.windowState.windowWidth
}))(Screen);
