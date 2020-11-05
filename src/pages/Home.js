import React from 'react';
import PracticeGeneratorBox from '../components/PracticeGeneratorBox.js';

import HeaderBar from '../components/header';

import { themeMagic } from '../theme.js';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container, CardHeader, Button, Menu, MenuItem } from '@material-ui/core';

function Home()
{
    return (
        <ThemeProvider theme={themeMagic}> 
            <Container>              
                <HeaderBar />
                             
            
            </Container>
            <Container>
                    <PracticeGeneratorBox/>
            </Container>
            <Container>
                Footer
            </Container>

        </ThemeProvider>
    );
}

export default Home;