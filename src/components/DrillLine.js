import React from 'react';

import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

class DrillLine extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
            urlDrill: props.urlPractice,
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
            return <br></br>;
        }
        let drill = this.state.drill[0];
        return (
            
            <TableRow key={drill.drill_name_fr}>
            <TableCell component="th" scope="row">
                {drill.drill_name_fr}
            </TableCell>
            <TableCell align="right">{drill.drill_description_fr}</TableCell>
            </TableRow>

        );
     }

}

export default DrillLine; 
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