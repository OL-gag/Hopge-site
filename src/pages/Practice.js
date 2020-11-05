import React from 'react';

import HeaderBar from '../components/header';
import DrillLine  from '../components/DrillLine'

import { themeMagic } from '../theme.js';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Practice extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            pId: null,
            practices : []
        };
        
        if ( props.location.pathname != null )
        {
            var appId = props.location.pathname.split('/');
            if ( appId.length >= 3 ) // format /Practice/20 
            {
                this.state = {
                    pId: appId[2]
                };
                          
            }
        }
      

       
    }
       

    componentDidMount () {
       this.fetchPractice();
   
    }
    
    fetchPractice()
    {
       
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            
            headers: { 
              'Content-Type': 'application/json'
            }
           
        };
        var urlPractice = "http://localhost:5253/api/practices/" + this.state.pId  + "/drills"
        fetch(urlPractice, requestOptions)
          .then(response => response.json())
          .then(data => {
                
                console.log("Fetching data =" + data.drillUrls);
          
                this.setState({ practices: data.drillUrls });
           
  
             } );
    }

    render() {
        
        let blockPat;                          
        if (this.state.practices != null )
        {
            blockPat =  this.state.practices.map(x=> ( <DrillLine urlPractice={x}/>) );
        }
   


        return (
            <ThemeProvider theme={themeMagic}> 
                <Container>              
                    <HeaderBar />
                </Container>
                <Container>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                                { blockPat }  
                        </TableBody>
                    </Table>
                    </TableContainer>
                                
                </Container>
                <Container>
                    Footer1
                </Container>

            </ThemeProvider>
        );
    }

};



export default Practice;

