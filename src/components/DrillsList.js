import React from "react";
import { withRouter } from "react-router-dom";

import SkillsSelection from "./SkillsSelection";
import DrillView from "./DrillView";

import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import {
  Grid,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import * as styles from "./DrillsList.module.css";

class Drillslist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drills: [],
      selected: [],
      drillFullice: "",
    };
  }

  componentDidMount() {
    this.filterDrills(null, null);
  }

  filterDrills(skills, fullIce) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    var urlDrillsSearch = "http://localhost:5253/api/drills/search?";

    if (!!skills) {
      urlDrillsSearch += "skills=" + skills;
    }
    if (fullIce != null) {
      if (!!skills) {
        urlDrillsSearch += "&";
      }
      urlDrillsSearch += "fullice=" + fullIce;
    }

    fetch(urlDrillsSearch, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching data =" + data.drills);
        this.setState({ drills: data.drills });
      });
  }

  //ARROW FUNCTION
  setSelected = (e) => {
    this.setState({
      selected: e,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  filterResult = () => {
    // extract filters
    var skillList = this.getValues(this.state.selected);
    var fullice = this.state.drillFullice == "full" ? true : null;
    fullice = this.state.drillFullice == "half" ? false : fullice;
    // get date from servers(could do it in memory?)
    this.filterDrills(skillList, fullice);
  };

  clearField = () => {
    // extract filters
    this.state.selected = [];
    this.state.drillFullice = [];
    // get date from servers(could do it in memory?)
    this.filterDrills(null, null);
  };

  getValues(arrLabelValues) {
    var valSkills = "";
    for (var i = 0; i <= arrLabelValues.length - 1; i++) {
      valSkills += arrLabelValues[i].value;
      if (i < arrLabelValues.length - 1) {
        valSkills += ",";
      }
    }
    return valSkills;
  }

  render() {
    var blockPat = "";
    if (this.state.drills.length == 0) return "";

    if (this.state.drills != null) {
      blockPat = this.state.drills.map((x) => (
        <DrillView
          urlPractice={"http://localhost:5253/api/drills/" + x.drill_id}
          lang="FR"
        />
      ));
    }

    return (
      <>
        <form>
          <Grid container spacing={0} className={styles.filterBox}>
            <Grid item xs>
              <Paper className={styles.itemsGrid} elevation={0}>
                Type exercice :{" "}
                <SkillsSelection
                  value={this.state.selected}
                  onChange={this.setSelected}
                  labelledBy={"Selects"}
                  overrideStrings={{ selectSomeItems: "Select Skills to work" }}
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={styles.itemsGrid} elevation={0}>
                <FormControl>
                  Glace
                  <RadioGroup
                    row
                    value={this.state.drillFullice}
                    name="drillFullice"
                    onChange={this.handleInputChange}
                  >
                    <FormControlLabel
                      value="full"
                      control={<Radio color="secondary" />}
                      label="Full Ice"
                    />
                    <FormControlLabel
                      value="half"
                      control={<Radio color="secondary" />}
                      label="Half-Ice"
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "10px 0px 10px 10px" }}
                startIcon={<SearchIcon />}
                onClick={() => this.filterResult()}
              >
                Search
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "10px 0px 10px 10px" }}
                startIcon={<ClearIcon />}
                onClick={() => this.clearField()}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>
        {blockPat}
      </>
    );
  }
}

export default withRouter(Drillslist);
