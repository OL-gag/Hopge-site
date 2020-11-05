import React from 'react';
import Home from '../pages/Home.js';
import Practice from '../pages/Practice.js'

import {
  Switch,
  Route
} from "react-router-dom";


function RoutesHopge() {
    return (
        <Switch>
          <Route path="/Practices/:id" component={Practice} />
          <Route path="/Practice" component={Practice} />
          <Route path="/" component={Home} />
       </Switch>
    );
}

export default RoutesHopge;