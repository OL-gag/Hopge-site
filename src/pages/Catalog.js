import React from "react";
import HopgePage from "../components/HopgePage.js";
import DrillsList from "../components/DrillsList";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HopgePage
        page={<DrillsList />}
        message="Here the list of all HOPGE drill, enjoy!">
      </HopgePage>
    );
  }
}

export default Catalog;
