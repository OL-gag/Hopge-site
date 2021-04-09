import React from 'react';
import { themeMagic } from '../theme.js';
import NavBar from '../pages/NavBar.js'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import PracticesList from '../components/PracticesList.js';
import './HopgePage.css';
import styled from './Styles.js';

const PaperMessage = styled(Paper)({
        padding : '20px 20px',
        backgroundColor : '#a3a5c3'
  });

const HopgeContainer = styled(Container)({
    padding : '20px 20px',
});

const HopgeContent = styled(Container)({
    padding : '20px 0px 0px 0px',
});


class HopgePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };   

    }

    render() {
        return (  
        <MuiThemeProvider theme={themeMagic}>    
            <div className='App'>
                <NavBar/> 
                <HopgeContainer>
                    <PaperMessage> {this.props.message}  </PaperMessage>
                    <HopgeContent>{this.props.page} </HopgeContent>
                </HopgeContainer>               
            </div>
            </MuiThemeProvider>  
        )
    }
}

export default HopgePage;