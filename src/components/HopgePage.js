import React from 'react';
import { themeMagic } from '../theme.js';
import NavBar from '../pages/NavBar.js'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import HopgeTopMessage from './HopgeTopMessage.js';
import './HopgePage.css';
import styled from './Styles.js';


const HopgeContainer = styled(Container)({
    padding : '20px 20px',
});


class HopgePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };   

    }

    render() {

        var message = <div></div>;
        if ( this.props.message != null )
        {
            message = <HopgeTopMessage message={this.props.message}> </HopgeTopMessage>;
        }
        if ( this.props.paper != null ) //Already formated TopMessage
        {
            message = this.props.paper; 
        }

        return (  
        <MuiThemeProvider theme={themeMagic}>    
            <div className='App'>
                <NavBar/> 
                <HopgeContainer>
                    {message}                    
                    <Container>{this.props.page} </Container>
                </HopgeContainer>               
            </div>
            </MuiThemeProvider>  
        )
    }
}

export default HopgePage;