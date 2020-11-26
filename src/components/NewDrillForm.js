import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import ImageUploadPreview from './ImageUploadPreview'
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
    Paper,
  } from "@material-ui/core";




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
    }
  }));




function NewDrillForm() {

    const classes = useStyles();

    var editor = useRef(null)
	const [contentFr, setContentFr] = useState('')
    const [contentEng, setContentEng] = useState('')
    const [pictures, setPicture] = useState('[]')

	const config = {
        "buttons": "bold,underline,italic,|,ul,ol,|,font,fontsize,|,,\n",
        "buttonsMD": "bold,underline,italic,|,ul,ol,|,font,fontsize,|,,\n",
        "buttonsSM": "bold,underline,italic,|,ul,ol,|,font,fontsize,|,,\n",
        "buttonsXS": "bold,underline,italic",
        toolbarAdaptive : true       
    }
 

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
                name="TitleFr"
                fullWidth
              />
            </Paper>
            <Paper className={classes.field} elevation={0}>
              <JoditEditor
                ref={editor}
                value={contentFr}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContentFr(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
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
                name="TitleEng"
                fullWidth
              />
            </Paper>
            <Paper className={classes.field} elevation={0}>
              <JoditEditor
                ref={editor}
                value={contentEng}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContentEng(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
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
                <div className={classes.imageView}>
              {/* <Paper elevation={2} color="primary"> */}
                    <ImageUploadPreview/>
                    </div>
              {/* </Paper> */}
              <Paper className={classes.field} elevation={2}>
                Skills set
              </Paper>
            </Grid>
          </Grid>

          <Grid container justify="flex-end" alignItems="basline">
            <Button variant="contained" color="secondary" onClick="">
              Populate HOPGE!
            </Button>
          </Grid>
        </Grid>
      </form>
    );
}

export default NewDrillForm
