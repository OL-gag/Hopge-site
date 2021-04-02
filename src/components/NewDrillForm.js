import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ImageUploadPreview from "./ImageUploadPreview";
import {
  Grid,
  makeStyles,
  Button,
  Paper,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import SkillsSelection from "./SkillsSelection";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

import {
  FieldFeedback,
  FieldFeedbacks,
  FormControl,
  FormWithConstraints,
  TextField,
} from "react-form-with-constraints-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px 0px",
    "& .MuiButtonBase-root": {
      margin: theme.spacing(1, 0, 1, 1),
    },
    "& .makeStyles-imageView-14": {
      display: "flex",
      alignItems: "center",
      justify: "center",
      flexDirection: "column",
    },
  },
  Container: {
    padding: "20px 20px",
  },
  Message: {
    padding: "20px 20px",
    backgroundColor: "#a3a5c3",
  },
  div: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 16,
  },
  grid: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 16,
  },
  label: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 16,
    padding: "48px 15px",
    margin: "0px 0px 0px 0px",
  },
  labelIce: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 16,
    padding: "19px 10px",
    margin: "0px 0px 0px 0px",
    verticalAlign: "top",
  },
  sectionIce: {
    padding: "0px 0px",
    margin: "0px 0px 0px 10px",
    verticalAlign: "top",
  },
  field: {
    padding: "16px 20px",
  },
  topTable: {
    padding: "5px 5px",
    alignItems: "center",
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 12,
  },
  ImageSection: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 16,
    height: "137px",
    padding: "24px 10px",
    margin: "0px 0px 0px 0px",
  },
  imagePreview: {
    display: "flex",
    alignItems: "center",
    justify: "center",
    flexDirection: "column",
  },
}));

const initialValues = {
  drTitleFr: "",
  drTitleEng: "",
  drFullice: "full",
  needRefresh: false,
};

function NewDrillForm() {
  const classes = useStyles();
  const history = useHistory();

  const [descriptionFr, setContentFr] = useState("");
  const [descriptionEng, setContentEng] = useState("");
  const [selected, setSelected] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [baseImage, setBaseImage] = useState("");

  const buttonList = [
    ["bold", "underline", "italic"],
    ["align", "list"],
    ["font", "fontSize", "formatBlock"],
  ];

  const cleanFields = () => {
    ImageClear();
    setContentFr("");
    setContentEng("");
    setSelected([]);
    setValues(initialValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const ImageUploaded = async (file) => {
    var reader = new FileReader();
    reader.onloadend = function () {
      // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
      var b64 = reader.result.replace(/^data:.+;base64,/, "");
      setBaseImage(b64);
    };

    reader.readAsDataURL(file); 
  };

  const ImageRemoved = (async) => {
    setBaseImage("");
  };

  const ImageClear = () => {
    setValues({
      needRefresh: true,
    });
  };

  const handleSubmit = (e) => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titleFr: values.drTitleFr,
        titleEng: values.drTitleEng,
        descriptionFr: descriptionFr,
        descriptionEng: descriptionEng,
        picture: baseImage,
        skills: getSelectedSkill(selected),
        fullIce: values.drFullice === "full" ? true : false,
        version: "1.0",
      }),
    };
    fetch("http://localhost:5253/api/drills/drill", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Drill Saved" + data);
        cleanFields();
        return history.push("/drill/success");
      })
      .catch((err) => {
        console.log(err);
        return history.push("/drill/error");
      });

    e.preventDefault();
  };

  //Should have a way to encampsule and reuse this logic in the compomement : GetSelection ?
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

  return (
    <FormWithConstraints
      className={classes.root}
      onSubmit={handleSubmit}
      noValidate
    >
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Paper className={classes.topTable} elevation={0}></Paper>
          <Paper className={classes.label} elevation={0}>
            Titre
          </Paper>
          <Paper className={classes.label} elevation={0}>
            Description
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.topTable} elevation={0}>
            Français
          </Paper>
          <Paper className={classes.field} elevation={0}>
            <TextField
              id="outlined-search"
              variant="outlined"
              label="Titre"
              name="drTitleFr"
              value={values.drTitleFr}
              onChange={handleInputChange}
              fullWidth
              size="small"
            />
            <FieldFeedbacks for="drTitleFr">
              <FieldFeedback when="valueMissing" />
            </FieldFeedbacks>
          </Paper>
          <Paper className={classes.field} elevation={0}>
            <SunEditor
              setOptions={{
                height: 150,
                buttonList: buttonList,
                mode: "classic",
              }}
              onChange={setContentFr}
              setContents={descriptionFr}
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.topTable} elevation={0}>
            Anglais
          </Paper>
          <Paper className={classes.field} elevation={0}>
            <TextField
              id="outlined-search"
              variant="outlined"
              label="Title"
              name="drTitleEng"
              value={values.drTitleEng}
              onChange={handleInputChange}
              fullWidth
              size="small"
            />
          </Paper>
          <Paper className={classes.field} elevation={0}>
            <SunEditor
              setOptions={{
                height: 150,
                buttonList: buttonList,
              }}
              onChange={setContentEng}
              setContents={descriptionEng}
            />
          </Paper>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Paper className={classes.labelIce} elevation={0}>
              Ice/Glace
            </Paper>
            <Paper className={classes.ImageSection} elevation={0}>
              Image
            </Paper>
            <Paper className={classes.label} elevation={0}>
              Skills
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.sectionIce} elevation={0}>
              <FormControl>
                <RadioGroup
                  row
                  value={values.drFullice}
                  name="drFullice"
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="full"
                    control={<Radio color="secondary" />}
                    label="Pleine Glace / Full Ice"
                  />
                  <FormControlLabel
                    value="half"
                    control={<Radio color="secondary" />}
                    label="Demie Glace / Half-Ice"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
            <div className={classes.imagePreview}>
              {/* <Paper elevation={2} color="primary"> */}
              <ImageUploadPreview
                onFileSelectSuccess={ImageUploaded}
                onFileRemove={ImageRemoved}
                needRefresh={values.needRefresh}
              />
            </div>
            {/* </Paper> */}
            <Paper className={classes.field} elevation={0}>
              <SkillsSelection
                value={selected}
                onChange={setSelected}
                labelledBy={"Selects"}
                overrideStrings={{ selectSomeItems: "Select Skills to work" }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="flex-end" alignItems="basline">
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Populate HOPGE!
          </Button>
        </Grid>
      </Grid>
    </FormWithConstraints>
  );
}

export default NewDrillForm;
