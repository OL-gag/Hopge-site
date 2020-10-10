import { createMuiTheme } from "@material-ui/core/styles";

import lightBlue from '@material-ui/core/colors/lightBlue';
import amber from '@material-ui/core/colors/amber'; 

// Create a theme instance.
export const themeMagic = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: amber,
    },
    typography: {
        fontFamily: "Comic Sans MS",
        body2: {
            fontFamily: "Times New Roman",
            fontSize: "1.1rem"
        }
    },                
}); 