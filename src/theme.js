import { createMuiTheme } from "@material-ui/core/styles";


// Create a theme instance.
export const themeMagic = createMuiTheme({
    palette: {
        primary : 
        {
            main : '#37515f',
        },      
        secondary: 
        {
            main: '#a3a5c3',
        }, 
    },
    typography: {
        fontFamily: "Comic Sans MS",
        body2: {
            fontFamily: "Times New Roman",
            fontSize: "1.1rem"
        }
    },                
}); 