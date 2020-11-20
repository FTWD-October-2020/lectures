import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Dog from './Dog'
import Taco from './Taco'
import RickMorty from './RickMorty'

function App() {

  return (
    <div>
      <h1>Welcome to APIs and Usee Effect</h1>
      <Link to="/dog/pitbull">Dog Page</Link>
      <Link to="/taco">Taco Page</Link>
      <Link to="/rick-and-morty">R&M Page</Link>


      <Switch>
        <Route exact path='/dog/:breed' render={(props) => <Dog {...props} />} />

        <Route exact path='/taco' render={(props) => <Taco {...props} />} />

        <Route exact path='/rick-and-morty' render={(props) => <RickMorty {...props} />} />

      </Switch>
    </div>

  )
}


// Axios
//   .get(`http://taco-randomizer.herokuapp.com/random/`)
//   .then(res => {
//     console.log(res)
//   })







export default App;
