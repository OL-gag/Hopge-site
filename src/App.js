import React from 'react'
import RoutesHopge from './routes/routes.js'
import './App.css'
import NavBar from './pages/NavBar.js'
import NewPracticeForm from './components/NewPracticeForm.js'
import CreatePratice from './pages/CreatePratice.js'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { themeMagic } from './theme'




function App() {
    return(  
        <MuiThemeProvider theme={themeMagic}>    
            <div className='App'>
                <NavBar/> 
                <CreatePratice/>
            </div>
            </MuiThemeProvider>  
        );    
}

export default App;

