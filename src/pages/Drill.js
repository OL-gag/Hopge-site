import  React from 'react'
import { themeMagic } from '../theme.js';

import NavBar from './NavBar.js'

import CreateDrill from './CreateDrill.js'
import { MuiThemeProvider } from '@material-ui/core/styles';

function Drill() {
    return (
        <MuiThemeProvider theme={themeMagic}>    
        <div className='App'>
            <NavBar/> 
            <CreateDrill/>
        </div>
        </MuiThemeProvider>  
    )
}

export default Drill
