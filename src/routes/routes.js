import React from 'react';
import Home from '../pages/Home.js';
import Practice from '../pages/Practice.js'
import Drill from '../pages/Drill.js'
import UserPractices from '../pages/UserPractices.js'
import Catalog from '../pages/Catalog.js'

import {
  Switch,
  Route
} from "react-router-dom";


function RoutesHopge() {
    return (
        <Switch>
          <Route path="/Practices/:id" component={Practice} />
          <Route path="/Practice" component={Practice} />
          <Route path="/MyPractices" component={UserPractices} />
          <Route path="/Catalog" component={Catalog} />
          <Route path="/" component={Home} />
       </Switch>
    );
}

export default RoutesHopge;