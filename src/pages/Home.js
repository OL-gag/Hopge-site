import React from 'react';
import { themeMagic } from '../theme.js';

import NavBar from './NavBar.js'

import CreatePratice from './CreatePratice.js'
import { MuiThemeProvider } from '@material-ui/core/styles';

function Home()
{
    return (
        <MuiThemeProvider theme={themeMagic}>    
        <div className='App'>
            <NavBar/> 
            <CreatePratice/>
        </div>
        </MuiThemeProvider>  
    );
}

export default Home;