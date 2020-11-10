
import React from 'react';

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

class PracticeGeneratorForm extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
          prtTitle: "",
          prtLenght: 60,
          prtFullIce : true,
          prtSkSkate: false,
          prtSkShoot: false,
          fprtSkStop: false,
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
                <Grid container spacing={2}>
                    <Grid item xs={6}> 
                        <TextField id="outlined-search" variant="outlined" label="Titre" name="prtTitle" fullWidth   value={this.state.prtTitle} onChange={this.handleChange}/>
                    </Grid>     
                    <Grid item xs={3}>
                        <TextField id="outlined-search" variant="outlined" label="Longeur (minutes)" name="prtLenght" value={this.state.prtLenght} onChange={this.handleChange}/>  
                    </Grid>  
                    <Grid item xs={3}>
                        <FormControlLabel
                            control={<Checkbox checked={this.state.prtFullIce} onChange={this.handleChange} name="prtFullIce" />}
                            label="Pleine Glace"/> 
                    </Grid> 
                    <Grid item xs={12}>
                        <div className="skills">
                            <FormControl component="fieldset" className={this.formControl}>
                            <FormLabel component="legend">Habilités</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                control={<Checkbox checked={this.state.prtSkSkate} onChange={this.handleChange} name="prtSkSkate" />}
                                label="Patin"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={this.state.prtSkShoot} onChange={this.handleChange} name="prtSkShoot" />}
                                label="Lancer"
                                />
                                <FormControlLabel
                                control={<Checkbox checked={this.state.fprtSkStop} onChange={this.handleChange} name="fprtSkStop" />}
                                label="Freinage"
                                />
                            </FormGroup>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs></Grid>
                    <Grid margin-left="auto">
                        <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                            Générer
                        </Button>               
                    </Grid>
            </Grid>
        </form>
       </div>
       );
     }
}
export default PracticeGeneratorForm;
