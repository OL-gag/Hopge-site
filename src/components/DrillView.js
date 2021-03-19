import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Container, Paper } from "@material-ui/core";
var blobUtil = require('blob-util')
var base64 = require('base-64');
/*
Component to display one drill. The drill contain the title, the picture and the description in the selected language.
To implement : skills + duration (Start date - End Date with time)
*/
class DrillView extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
            urlDrill: props.urlPractice,
            lang: props.lang,
            drill: null
        };          
    }

    componentDidMount () {
        this.fetchDrill(this.state.urlDrill);    
     }
     
     fetchDrill(urlDrill)
     {        
         // Simple POST request with a JSON body using fetch
         const requestOptions = {
             
             headers: { 
               'Content-Type': 'application/json'
             }
            
         };
       
         fetch(urlDrill, requestOptions)
           .then(response => response.json())
           .then(data => {                 
                 console.log("Fetching data =" + data.drill);           
                 this.setState({ drill: data.drill });
              } );
     }
 
     render() {

        if ( this.state.drill == null )
        {
            return "<BR> Error, no drill found (DrillView)"; 
        }

        let drill_data = this.state.drill[0];

        return (
            <Paper>
                            
               <TableRow key={drill_data.drill_name_fr}>
                <TableCell component="th" scope="row">
                    <img src={`data:image/jpeg;base64,${drill_data.drill_picture_64}`} alt='No Image' />                
                </TableCell>
                <TableCell align="right">{
                    drill_data.drill_description_fr}
                </TableCell>
                </TableRow>
            </Paper>      

        );
     }

}

export default DrillView; 
/*
"drill_id": 8,
            "drill_name_fr": "Exercice 8",
            "drill_name_eng": "Exercise 9",
            "drill_description_fr": "Allez",
            "drill_descrription_eng": "Go",
            "drill_note": "Faire",
            "drill_picture": null,
            "drill_skills": "Patin"
*/