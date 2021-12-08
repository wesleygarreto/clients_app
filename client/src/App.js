import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListClientComponent from './clients/ListClientsComponent';
import CreateClientComponent from './clients/CreateClientComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path = "/" exact component = {ListClientComponent}></Route>
            <Route path = "/clients" component = {ListClientComponent}></Route>
            <Route path = "/add-client/:id" component = {CreateClientComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
