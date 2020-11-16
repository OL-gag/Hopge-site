import './NewPracticeFrom.css'
import React, {useState} from 'react'
import {Grid, makeStyles, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Button} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import SkillsSelection from './SkillsSelection'
//import { Button } from './Button.js'
const initialValues = 
{
  prtTitle : '2',
  prtDate : new Date(),
  prtDuration : 60,
  prtFullice : true
}

const options = [
  { label: "Skating", value: "Skating" },
  { label: "Passing", value: "Passing"},
  { label: "1 vs 1", value: "1vs1" },
  { label: "2 vs 2", value: "2vs2" },
  { label: "Breakout", value: "Breakout" },
  { label: "Forecheck", value: "Forecheck" },

];


const useStyle = makeStyles(theme => ({
  root : {
      padding : '20px 0px',
        '& .MuiFormControl-root' : 
      {
        margin: theme.spacing(1)
      }
  }

}))


function NewPracticeForm() {
    
    const [values, setValues] = useState(initialValues);
    const [selected, setSelected] = useState([]);
    const classes = useStyle();

    const handleSubmit = e => {
        e.preventDefault()
     
    }

    const handleInputChange = e =>
    {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })

    }

    return (
      <form className={classes.root}> 
        <Grid container>
          <Grid item xs={12}>  
              <TextField id="outlined-search" variant="outlined" label="Title" name="prtTitle" value={values.prtTitle} onChange={handleInputChange} />
              <FormControl >
                <FormLabel> Practice Date </FormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                  <DateTimePicker value={values.prtDate} />
                </MuiPickersUtilsProvider>
              </FormControl>
              
              <TextField id="outlined-search" variant="outlined" label="Duration (minutes)" name="prtDuration" value={values.prtDuration} onChange={handleInputChange}/>  

              <FormControl>
              <FormLabel>
                  Ring
              </FormLabel>
              <RadioGroup row >
               <FormControlLabel value="full" control={<Radio color="secondary"/>} label="Full Ice"  />
               <FormControlLabel value="half" control={<Radio  color="secondary"/>} label="Half-Ice" />        
              </RadioGroup>
            </FormControl>


          </Grid>
          <Grid item xs={12}>
                <SkillsSelection
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy={"Selects"}
                        overrideStrings={{"selectSomeItems": "Select Skills to work"} }  />            

          </Grid>
        </Grid>
        <Grid item xs={12} margin-left="auto">
            <Button  variant="contained" color="secondary" onClick={handleSubmit}>
                Generate
            </Button>               
        </Grid>
      </form>
    );
}

export default NewPracticeForm
