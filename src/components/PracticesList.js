import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PracticesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        practices : []
    };
  }

  componentDidMount() {
    this.fetchUserPractices(1);
  }

  fetchUserPractices(id) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    var urlPractice = "http://localhost:5253/api/practices/user/" + id;
    fetch(urlPractice, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching data =" + data.practices);
        this.setState({ practices: data.practices });
      });
  }

  render() {
    var tbPractice = "";
    if (this.state.practices != null) {
        tbPractice = this.state.practices.map((x) => (
          <tr><td>{x.title} </td></tr>
        ));
      }

    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Durée</TableCell>
              <TableCell align="right">Lieu</TableCell>
              <TableCell align="right">Pleine Glace</TableCell>
              <TableCell align="right">Afficher</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.state.practices.map((row)=> (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.startdtm}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.field}</TableCell>
                <TableCell align="right">{row.fullice}</TableCell>
                <TableCell align="right">View Icon</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>

    );
  }
}

export default PracticesList;
