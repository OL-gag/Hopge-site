import React from "react";
import DrillView from "../components/DrillView";
import { Paper } from "@material-ui/core";
//import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Grid from "@material-ui/core/Grid";
import { Table, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import * as styles from './PracticeView.module.css'


class PracticeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pId: null,
      practices: [],
      informations: [],
    };

    if (props.pagelink != null) {
      var appId = props.pagelink.split("/");
      if (appId.length >= 3) {
        // format /Practice/20
        this.state = {
          pId: appId[2],
        };
      }
    }
  }

  componentDidMount() {
    this.fetchInfoPractice();
    this.fetchDrills();
  }

  //Get all defined drills for the practice
  fetchDrills() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    var urlPractice =
      "http://localhost:5253/api/practices/" + this.state.pId + "/drills";
    fetch(urlPractice, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        //console.log("Fetching data =" + data.drillUrls);

        this.setState({ practices: data.drillUrls });
      });
  }

  //Get meta information on the practice
  fetchInfoPractice() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    var urlPractice =
      "http://localhost:5253/api/practices/" + this.state.pId + "/info";
    fetch(urlPractice, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching data =" + data.informations);

        this.setState({ informations: data.informations });
      });
  }

  render() {
    let blockPat;
    if (this.state.practices != null) {
      blockPat = this.state.practices.map((x) => (
        <DrillView urlPractice={x} lang="FR" />
      ));
    }

    if (this.state.informations == null) {
      return "Error: No exercices Found";
    }

    let info = this.state.informations[0];
    if ( info == null )
    {
      return "Error: not able to find practice info";
    }
    //format
    let datePractice = new Date(info.startdtm);

    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Table className={styles.tableInfo}>
              <Tr className={styles.thInfo}>
                <Th>­Titre</Th>
                <Td>{info.title}</Td>
              </Tr>
              <Tr className={styles.thInfo}>
                <Th>Date</Th>
                <Td>
                  {datePractice.toLocaleString("fr-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </Td>
              </Tr>
              <Tr className={styles.thInfo}>
                <Th>Lieu</Th>
                <Td>
                  {info.field} ( {info.fullice ? "Pleine Glace" : "Demi-Glace"}{" "}
                  ){" "}
                </Td>
              </Tr>
              <Tr className={styles.thInfo}>
                <Th>Note</Th>
                <Td>{info.note}</Td>
              </Tr>
            </Table>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>{blockPat}</TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default PracticeView;
