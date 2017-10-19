import React, { Component } from "react";
import { connect } from "react-redux";

import NotFoundComponent from "../components/NotFound";

class NotFound extends Component {
  render() {
    return <NotFoundComponent />;
  }
}

export default connect()(NotFound);
