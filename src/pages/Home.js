import React from 'react';
import PracticeGeneratorBox from '../components/PracticeGeneratorBox.js';

import { themeMagic } from '../theme.js';
import { ThemeProvider } from '@material-ui/core/styles';

function Home()
{
    return (
        <ThemeProvider theme={themeMagic}> 
            <PracticeGeneratorBox/>
        </ThemeProvider>
    );
}

export default Home;