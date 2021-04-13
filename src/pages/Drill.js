import React from "react";
import CreateDrill from "../components/CreateDrill.js";
import HopgePage from "../components/HopgePage.js";
import HopgeTopMessage from "../components/HopgeTopMessage.js";

class Drill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.location.pathname,
    };
  }

  render() {
    var displayMessage = this.drillMessage();

    return (
      <HopgePage page={<CreateDrill />} paper={displayMessage}></HopgePage>
    );
  }

  drillMessage() {
    var msg =
      "Yes! You have a good drill to propose! Just publish it on Hopge!";
    var typeMessage = null;

    if (this.state.url != null) {
      var isSaved = this.state.url.includes("success");
      if (isSaved) {
        msg = "Congrulations! Your drill have been saved correctly";
        typeMessage = "succes";
      }
      var isError = this.state.url.includes("error");
      if (isError) {
        msg = "Error! Sorry we cannot save the drill";
        typeMessage = "error";
      }
    }
    return (
      <HopgeTopMessage message={msg} typeMessage={typeMessage}>
        {" "}
      </HopgeTopMessage>
    );
  }
}

export default Drill;
