import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import ImageUploadPreview from './ImageUploadPreview'
import {
    Grid,
    makeStyles,
    TextField,
    Button,
    Paper,
  } from "@material-ui/core";
import SkillsSelection from './SkillsSelection'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File


const  useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding : '20px 0px',
      "& .MuiButtonBase-root": {
        margin: theme.spacing(1, 0, 1, 1),
      },
      "& .makeStyles-imageView-14" :
      {
        display : 'flex',
        alignItems : 'center',
        justify : 'center',
        flexDirection : 'column'
      }
    },
    Container: {
        padding : '20px 20px',
        
    },
    Message: {
        padding : '20px 20px',
        backgroundColor : '#a3a5c3',
        
    },
    div:{
        fontFamily: 'Impact, Charcoal, sans-serif',
        fontSize: 16,
    },
    grid: {
     fontFamily: 'Impact, Charcoal, sans-serif',
     fontSize: 16,
    },
    label: {
        fontFamily: 'Impact, Charcoal, sans-serif',
        fontSize: 16,
        padding : '48px 15px',
        margin: '0px 0px 0px 0px',
    },
    field: {
        padding : '30px 20px',
    },
    topTable: {
        padding : '20px 20px',
    },
    ImageSection:
    {
        height: '200px',
    },
    imagePreview:
    {
      display : 'flex',
      alignItems : 'center',
      justify : 'center',
      flexDirection : 'column'
    }
  }));

  const initialValues = {
    drTitleFr: "",
    drTitleEng: ""
  };



function NewDrillForm() {

    const classes = useStyles();
    const history = useHistory();

	  const [descriptionFr, setContentFr] = useState('')
    const [descriptionEng, setContentEng] = useState('')
    const [selected, setSelected] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [baseImage, setBaseImage] = useState("");
    
    const buttonList = [['bold', 'underline', 'italic'], ['align', 'list'],['font', 'fontSize', 'formatBlock']];


    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      setValues({
        ...values,
        [name]: value,
      });
    };

    const ImageUploaded = async(i) => 
    {
      const base64 = await convertBase64(i);
      setBaseImage(base64);
         
    }

    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
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
          version : '1.0'
        }),
      };
      fetch("http://localhost:5253/api/drills/drill", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("Drill Saved" + data);
          
          return history.push("/drill/");
  
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
      <form className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Paper className={classes.topTable} elevation={0}>
              Champs
            </Paper>
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
                onChange={handleInputChange}
                fullWidth
              />
            </Paper>
            <Paper className={classes.field} elevation={0}>
            <SunEditor  
                  setOptions={{
                                  height: 150,
                                  buttonList: buttonList}
                            }
                  onChange={setContentFr}
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
                onChange={handleInputChange}
                fullWidth
              />
            </Paper>
            <Paper className={classes.field} elevation={0}>
                 <SunEditor  
                  setOptions={{
                                  height: 150,
                                  buttonList: buttonList}
                            }
                  onChange={setContentEng}
                                      
                        />
            </Paper>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Paper className={classes.ImageSection} elevation={0}>
                Image
              </Paper>
              <Paper className={classes.field} elevation={0}>
                Skills
              </Paper>
            </Grid>
            <Grid item xs={10}>
              <div className={classes.imagePreview}>
                {/* <Paper elevation={2} color="primary"> */}
                <ImageUploadPreview onFileSelectSuccess={ImageUploaded} />
              </div>
              {/* </Paper> */}
              <Paper className={classes.field} elevation={2}>
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
      </form>
    );
}

export default NewDrillForm
