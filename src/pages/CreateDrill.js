import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';

import NewDrillForm from '../components/NewDrillForm';

import {useLocation} from "react-router-dom";


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
    MessageSaved: {
        padding : '20px 20px',
        backgroundColor : '#aae142',
        
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
    const location = useLocation();
    var messageBanner =  "Yes! You have a good drill to propose! Just publish it on Hopge!" 
    var colorBanner = classes.Message;
    if (location.pathname != null) {
        var isSaved = location.pathname.includes("success");
        if (isSaved) {
            messageBanner = "Congrulations! Your drill have been saved correctly";
            colorBanner = classes.MessageSaved;
        }
      }


    return (
        <>
          <div className="top-info"></div>
            <Container className={classes.Container}>
                <Paper className={colorBanner}>   {messageBanner} </Paper>
                <NewDrillForm/>
            </Container>
            <div className="NewDrillForm"></div>  
        </>
    )
}

export default CreateDrill
