import React from 'react';
import Box from '@material-ui/core/Box'; 
import PracticeGeneratorForm from './PracticeGeneratorForm.js';

function PracticeGeneratorBox() {
        return (
            <Box 
                display="flex" 
                width={650} height={300} 
                alignItems="center"
                justifyContent="center"
                m={2}
                bgcolor="rgba(0, 0, 0, 0.04)"
            >
               < PracticeGeneratorForm/>
             </Box>
        );    
} 

export default PracticeGeneratorBox;