import React from 'react';
import { themeMagic } from '../theme.js';
import NavBar from './NavBar.js'
import { MuiThemeProvider } from '@material-ui/core/styles';
import PracticesList from '../components/PracticesList.js';

class UserPractices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pId: null,
          practices: [],
          informations: [],
        };   

    }

    render() {
        return (  
        <MuiThemeProvider theme={themeMagic}>    
            <div className='App'>
                <NavBar/> 
                <PracticesList/>
            </div>
            </MuiThemeProvider>  
        )
    }
}

export default UserPractices;