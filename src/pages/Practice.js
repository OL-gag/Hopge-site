import React from "react";
import HopgePage from "../components/HopgePage.js";
import PracticeView from "../components/PracticeView.js";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlPratice: props.location.pathname,
    };
  }

  render() {
    return (
      <HopgePage
        page={<PracticeView pagelink={this.state.urlPratice} />}
      ></HopgePage>
    );
  }
}

export default Practice;
