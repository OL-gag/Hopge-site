import React from "react";
import HopgePage from "../components/HopgePage.js";
import NewPracticeForm from "../components/NewPracticeForm";

class CreatePratice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HopgePage
        page={<NewPracticeForm />}
        message="Let Hopge's engin build a new pratice based on your selected skills! "
      ></HopgePage>
    );
  }
}

export default CreatePratice;
