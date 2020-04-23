import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'; 
import './App.css'
import { PeopleList } from './components/PeopleList';
import { AddPerson } from './components/AddPerson';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
      <h1>Greene DOBs</h1>
      </nav>

      <Route exact path="/">
        <Login/>
      </Route>

      <Route exact path="/list">
        <PeopleList/>
        <AddPerson/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
