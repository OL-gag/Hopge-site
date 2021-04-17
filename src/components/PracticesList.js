import React from "react";
import { withRouter } from "react-router-dom";

import AssignmentIcon from '@material-ui/icons/Assignment';
import { IconButton } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { Table, Tr, Th, Td, Tbody, Thead } from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Redirect } from 'react-router-dom'
import * as styles from './PracticesList.module.css'

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
        return styles.today;
      }
    return styles.tablePractice;
  }

  emptyField(field) //bug with the grid when there is an empty string
  {
     if (field == '')
      return null;

     return field;
  }
 
  routeChange=(id)=> {
    let path = '/Practices/' + id;
  
    this.props.history.push(path);
  }

  openPractice(id)
  {
    
    return <Redirect to={'/Practices/' + id} /> //not working
  }

  render() {
    if ( this.state.practices.length == 0 ) return ("")
    return (
      <Grid className={styles.GridPractice}>
        <Table aria-label="simple table" className={styles.tablePractice} >
          <Thead>
            <Tr className={styles.tablePractice}>
              <Th className={styles.topRow}>Titre</Th>
              <Th className={styles.topRow}>Date</Th>
              <Th className={styles.topRow}>Durée</Th>
              <Th className={styles.topRow}>Lieu</Th>
              <Th className={styles.topRow}>Pleine Glace</Th>
              <Th className={styles.topRow}>Afficher</Th>
            </Tr>
          </Thead>
          <Tbody>
            { this.state.practices.map((row)=> (

                <Tr key={row.title} className={this.classOfTheDay(row.startdtm)}>           
                <Td className={styles.dataRow}>{row.title}</Td>
                <Td className={styles.dataRow} align="center" >
                  { this.getDatePractice(row.startdtm) }</Td>
                <Td className={styles.dataRow} align="center">{row.duration}</Td>
                <Td className={styles.dataRow}  align="center">{this.emptyField(row.field)}</Td>
				        <Td className={styles.dataRow}  align="center">{this.state.practices[0].fullice ? "Oui" : "Non"}</Td>
                 <Td className={styles.dataRow}  align="center"><IconButton onClick={() => this.routeChange(row.practice_id)}><AssignmentIcon ></AssignmentIcon></IconButton></Td>
              </Tr>
            ))
            }
          </Tbody>
        </Table>
      </Grid>
   

    );
  }
}

export default withRouter(PracticesList);
