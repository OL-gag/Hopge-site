import React from "react";

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './PracticesList.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { IconButton } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { Table, Tr, Th, Td, Tbody, Thead } from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Redirect } from 'react-router-dom'

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

  getDatePractice(dt)
  {
    var newDate = new Date(dt);
    return newDate.toLocaleString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    }).replace(/,/g, "");
  }

  classOfTheDay(dt)
  {
    var someDate = new Date(dt);
 
    const today = new Date()
    if ( someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear() )
      {
        return "today"
      }
    return "normal";
  }

  emptyField(field) //bug with the grid when there is an empty string
  {
     if (field == '')
      return null;

     return field;
  }

  openPractice(id)
  {
    return <Redirect to={'/Practices/' + id} /> //not working
  }

  render() {
    if ( this.state.practices.length == 0 ) return ("")
    return (
      <Grid className="GridPractice">
        <Table aria-label="simple table" className="tablePractice">
          <Thead>
            <Tr>
              <Th>Titre</Th>
              <Th>Date</Th>
              <Th>Durée</Th>
              <Th>Lieu</Th>
              <Th>Pleine Glace</Th>
              <Th>Afficher</Th>
            </Tr>
          </Thead>
          <Tbody>
            { this.state.practices.map((row)=> (

                <Tr key={row.title} className={this.classOfTheDay(row.startdtm)}>           
                <Td>{row.title}</Td>
                <Td align="center">
                  { this.getDatePractice(row.startdtm) }</Td>
                <Td align="center">{row.duration}</Td>
                <Td align="center">{this.emptyField(row.field)}</Td>
				        <Td align="center">{this.state.practices[0].fullice ? "Oui" : "Non"}</Td>
                <Td align="center"><IconButton onClick={this.openPractice(row.practice_id)}><AssignmentIcon ></AssignmentIcon></IconButton></Td>
              </Tr>
            ))
            }
          </Tbody>
        </Table>
      </Grid>
   

    );
  }
}

export default PracticesList;
