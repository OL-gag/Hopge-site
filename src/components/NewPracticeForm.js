import "./NewPracticeFrom.css";
import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import SkillsSelection from "./SkillsSelection";
import { useHistory } from "react-router-dom";
import moment from "moment";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const initialValues = {
  prtTitle: "",
  prtDate: new Date(),
  prtDuration: 60,
  prtFullice: "full",
  prtLocation : "",
  prtNote : ""
};



const useStyle = makeStyles((theme) => ({
  root: {
    padding: "20px 0px",
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(1, 1, 1, 0),
    },
    "& .go2646822163": {
      margin: "0px 0px 0px 0px",
    },
  },
}));

// eslint-disable-next-line
Date.prototype.toJSON = function () {
  return moment(this).format();
};

function NewPracticeForm() {
  const [values, setValues] = useState(initialValues);
  const [selected, setSelected] = useState([]);
  const classes = useStyle();
  const history = useHistory();

  const handleSubmit = (e) => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.prtTitle,
        duration: values.prtDuration,
        fullIce: values.prtFullice === "full" ? true : false,
        startDateTime: values.prtDate,
        endDateTime: new Date(
          values.prtDate.getTime() + values.prtDuration * 60000
        ),
        location: values.prtLocation,
        note: values.prtNote,
        skills: getSelectedSkill(selected),
        userId: 1,
      }),
    };
    fetch("http://localhost:5253/api/practices/practice", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Practice Generated" + data);
        var practiceId = data.practice_id;
        return history.push("/Practice/" + practiceId);

        //this.setState({ redirect: "/Practice/" + practiceId });
      });
    //.then(data => this.setState({ postId: data.id }));

    e.preventDefault();
  };

  const getSelectedSkill = (skills) => {
    var selection = "";
    for (let i = 0; i <= skills.length - 1; i++) {
      selection += skills[i].value;
      if (i < skills.length - 1) {
        selection += ", ";
      }
    }

    return selection;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChangeDate = (e) => {
    setValues({
      ...values,
      prtDate: e,
    });
  };

  return (
    <form className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
            <TextField
              id="outlined-search"
              variant="outlined"
              label="Title"
              name="prtTitle"
              fullWidth
              value={values.prtTitle}
              onChange={handleInputChange}
            />  
            </Grid> 
             <Grid item xs={4}>   
            <TextField
              id="outlined-search"
              variant="outlined"
              label="Lieu"
              name="prtLocation"
              fullWidth
              value={values.prtLocation}
              onChange={handleInputChange}
            /> 
        </Grid>
        <Grid item xs={8}>
          <FormControl>
            <FormLabel> Practice Date </FormLabel>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                value={values.prtDate}
                name="prtDate"
                onChange={handleChangeDate}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        
          <TextField
            id="outlined-search"
            variant="outlined"
            label="Duration (minutes)"
            name="prtDuration"
            inputProps={{
              maxLength: 2,
              length: 4
            }}
            value={values.prtDuration}
            onChange={handleInputChange}
          />
          
          <FormControl>
            <FormLabel>Ring</FormLabel>
            <RadioGroup
              row
              value={values.prtFullice}
              name="prtFullice"
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="full"
                control={<Radio color="secondary" />}
                label="Full Ice"
              />
              <FormControlLabel
                value="half"
                control={<Radio color="secondary" />}
                label="Half-Ice"
              />
            </RadioGroup>
          </FormControl>
      

        </Grid>
        <Grid item xs={12}>
          <SkillsSelection            
            value={selected}
            onChange={setSelected}
            labelledBy={"Selects"}
            overrideStrings={{ selectSomeItems: "Select Skills to work" }}
          />
        </Grid>
        <Grid item xs={12}>
        <TextareaAutosize
              name="prtNote"
              rowsMax={4}
              rowsMin={3} 
              placeholder="Notes"
              defaultValue={values.prtNote}
              value={values.prtNote}
              style={{ width: "75%" }}
              onChange={handleInputChange}
        />
        </Grid>  
        <Grid container justify="flex-end" alignItems="baseline">
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Generate
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default NewPracticeForm;
