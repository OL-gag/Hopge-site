import React from "react";
import PracticesList from "../components/PracticesList.js";
import HopgePage from "../components/HopgePage.js";

class UserPractices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HopgePage
        page={<PracticesList />}
        message="Here All your practive"
      ></HopgePage>
    );
  }
}

export default UserPractices;
