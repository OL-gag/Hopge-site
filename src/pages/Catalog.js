import React from 'react';
import HopgePage from '../components/HopgePage.js';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {        
        };   

    }

    render() {
        
        var catlogPage = <table><tr><td>test</td></tr></table>       
       
        return (  
            <HopgePage page={catlogPage} message="Here the list of all HOPGE drill, enjoy!"></HopgePage>
        )
    }
}

export default Catalog;