import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

//import App from './App.js'
import RoutesHopge from './routes/routes.js'

function App() {
  return (
    <div>
      <RoutesHopge />
    </div>
  );
}


ReactDOM.render(
     <Router>
        <App />
      </Router>,
  document.getElementById('root')
);


