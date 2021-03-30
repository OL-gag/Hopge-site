import React from "react";

import NavBar from "./NavBar.js";
import DrillView from "../components/DrillView";

import { themeMagic } from "../theme.js";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
//import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Grid from "@material-ui/core/Grid";
import "./Practice.css";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pId: null,
      practices: [],
    };

    if (props.location.pathname != null) {
      var appId = props.location.pathname.split("/");
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
        console.log("Fetching data =" + data.drillUrls);

        this.setState({ practices: data.drillUrls });
      });
  }

  fetchInfoPractice() {
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
        console.log("Fetching data =" + data.drillUrls);

        this.setState({ practices: data.drillUrls });
      });
  }

  render() {
    let blockPat;
    if (this.state.practices != null) {
      blockPat = this.state.practices.map((x) => <DrillView urlPractice={x} lang='FR' />);
    }

    return (
      <ThemeProvider theme={themeMagic}>
        <div className="practice">
          <NavBar />
          <Container className="containerinfo">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Table className="tableInfo">
                  <Tr>
                    <Th className="thInfo">Title</Th>
                    <Td className="tdInfo">
                      my title dddddddd dddddddddddddddd dddddddddd
                    </Td>
                  </Tr>
                  <Tr>
                    <Th className="thInfo">Date</Th>
                    <Td className="tdInfo">my date</Td>
                  </Tr>
                  <Tr>
                    <Th className="thInfo">Lieu</Th>
                    <Td className="tdInfo">mon lieu</Td>
                  </Tr>
                  <Tr>
                    <Th className="thInfo">Note</Th>
                    <Td className="tdInfo">mon lieu</Td>
                  </Tr>
                </Table>
              </Grid>
            </Grid>

            <TableContainer component={Paper}>
              <Table>
                <TableBody>{blockPat}</TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default Practice;
