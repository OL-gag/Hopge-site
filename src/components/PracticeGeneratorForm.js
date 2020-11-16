
import React, {useState} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";

import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MultiSelect from "react-multi-select-component";


const options = [
  { label: "Skating", value: "Skating" },
  { label: "Passing", value: "Passing"},
  { label: "1 vs 1", value: "1vs1" },
  { label: "2 vs 2", value: "2vs2" },
  { label: "Breakout", value: "Breakout" },
  { label: "Forecheck", value: "Forecheck" },

];


class PracticeGeneratorForm extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
          prtTitle: "",
          prtLenght: 60,
          prtDate : new Date(),
          prtFullIce : true,
          prtSkills : options,
          redirect: null
        };
       
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }
     //set field values
     handleChange(event) {
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name =  target.name;
      
       this.setState({[name]:value});
         
     }
     //Start Practice Generator.  
     handleSubmit(event) {
       
     // Simple POST request with a JSON body using fetch
        const requestOptions = {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            title: this.state.prtTitle,
            duration : this.state.prtLenght,
            fullIce : this.state.prtFullIce,
            userId : 1          
          })
      };
      fetch('http://localhost:5253/api/practices/practice', requestOptions)
        .then(response => response.json())
        .then(data => {
              
          console.log("Practice Generated" + data);
              var practiceId = data.practice_id;
              this.setState({ redirect: "/Practice/" + practiceId });
         

           } );
          //.then(data => this.setState({ postId: data.id }));
        
        event.preventDefault();
     }
     


     useStyles = makeStyles((theme) => ({
       root: {
         display: 'flex',
       },
       formControl: {
         margin: theme.spacing(3),
         border: 1,
       },
       div:{
           fontFamily: 'Impact, Charcoal, sans-serif',
           fontSize: 16,
       },
       grid: {
        fontFamily: 'Impact, Charcoal, sans-serif',
        fontSize: 16,
       },
     }));
     
     render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className={this.root} style={{ padding: 10 }}>
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid container item xs={12} spacing={3}>     
                    <Grid item xs={6}><TextField id="outlined-search" variant="outlined" label="Title" name="prtTitle" fullWidth  value={this.state.prtTitle} onChange={this.handleChange}/></Grid>
                    <Grid item xs={6} >
                      <p>
                                            <TextField id="outlined-search" variant="outlined" label="Duration (minutes)" name="prtLenght" value={this.state.prtLenght} onChange={this.handleChange}/>   
                                            </p>  <p>
                        <FormControl >
                        <FormLabel> Practice Date </FormLabel>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <DateTimePicker value={this.state.prtDate} />
                        </MuiPickersUtilsProvider>
                      </FormControl>
                      </p>
                  </Grid>
                  </Grid>
                  <Grid container item xs={12}>                    
                    <Grid item xs>
              

                    </Grid>
                    <Grid item xs>y</Grid>
                    <Grid margin-left="auto">
                        <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                            Générer
                        </Button>               
                    </Grid>
                  </Grid>
                </Grid>
        </form>
       </div>
       );
     }
}
export default PracticeGeneratorForm;
