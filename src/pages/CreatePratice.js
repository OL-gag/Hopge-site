import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import NewPracticeForm from '../components/NewPracticeForm';
import './CreatePratice.css'



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

function CreatePratice() {

    const classes = useStyles();

    return (
        <>
          <div className="top-info"></div>
            <Container className={classes.Container}>
                <Paper className={classes.Message}> Let Hopge's engin build a new pratice based on your selected skills!  </Paper>
                <NewPracticeForm/>
            </Container>
            <div className="createPratice"></div>  
        </>
    )
}

export default CreatePratice
