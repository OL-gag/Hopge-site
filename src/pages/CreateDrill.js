import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';

import NewDrillForm from '../components/NewDrillForm';




const  useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
  }));

function CreateDrill() {

    const classes = useStyles();

    return (
        <>
          <div className="top-info"></div>
            <Container className={classes.Container}>
                <Paper className={classes.Message}>  Yes! You have a good drill to propose! Just publish it on Hopge! </Paper>
                <NewDrillForm/>
            </Container>
            <div className="NewDrillForm"></div>  
        </>
    )
}

export default CreateDrill
