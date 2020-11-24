import React from 'react'
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
    }
  }));




function NewDrillForm() {

    const classes = useStyles();

    return (
      <form className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Paper className={classes.topTable} elevation={0}>Champs</Paper>
            <Paper className={classes.label} elevation={0}>Titre</Paper>
            <Paper className={classes.label} elevation={0}>Description</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.topTable} elevation={0}>Français</Paper>
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
              <TextField
                id="filled-multiline-static"
                variant="outlined"
                label="Description"
                name="DescriptionFr"
                multiline
                rows={4}
                fullWidth
              />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.topTable} elevation={0}>Anglais</Paper>
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
            <TextField
                id="filled-multiline-static"
                variant="outlined"
                label="Description"
                name="DescriptionEng"
                multiline
                rows={4}
                fullWidth
              />
            </Paper>
          </Grid>
       
        <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Paper className={classes.field} elevation={0}>
                        Image
                    </Paper>
                    <Paper className={classes.field} elevation={0}>
                        Skills
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.field} elevation={2} color="primary">
                        Select File
                    </Paper>
                    <Paper className={classes.field} elevation={2}>
                        Skills set
                    </Paper>
                </Grid>
            </Grid>
        
        <Grid container  justify="flex-end" alignItems="basline">
          
                <Button variant="contained" color="secondary" onClick=''>
                     Populate HOPGE!
                </Button>
      
        </Grid>
        </Grid>
      </form>
    );
}

export default NewDrillForm
