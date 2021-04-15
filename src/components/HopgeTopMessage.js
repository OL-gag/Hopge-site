import React from 'react'
import styled from './Styles.js';
import { Paper } from '@material-ui/core';

const PaperMessage = styled(Paper)({
        padding : '20px 20px',
        backgroundColor : '#a3a5c3'
  });

const PaperMessageError = styled(Paper)({
    padding : '20px 20px',
    backgroundColor : '#FF0000'
});

const PaperMessageSucces = styled(Paper)({
    padding : '20px 20px',
    backgroundColor : '#aae142'
});

class HopgeTopMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message : props.message,
            typeMessage : props.typeMessage,
        };   

    }

    render() {

        if ( this.state.typeMessage == null  ) //default message
        {
            return (<PaperMessage>{this.state.message}</PaperMessage>) ;
        }
        else if ( this.state.typeMessage === "succes") //could we have an enum ?
        {
            return (<PaperMessageSucces>{this.state.message}</PaperMessageSucces>) ;
        }
        else if ( this.state.typeMessage === "error") 
        {
            return (<PaperMessageError>{this.state.message}</PaperMessageError>) ;
        }
        
        return (<></>); //nothing to display if no message  
    }
}

export default HopgeTopMessage;