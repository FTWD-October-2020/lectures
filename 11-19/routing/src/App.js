import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Country from './Country'
import { Switch, Route, Link } from 'react-router-dom';
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <h1>Routing w react router dom</h1>
      <Link to="/home">Home |</Link>
      <Link to="/about"> About</Link>
      <Link to="/country"> Country</Link>

      <Switch>

        <Route exact path='/home' render={(props) => <Home {...props} />} />
        <Route exact path='/about' render={(props) => <About {...props} />} />
        <Route exact path='/country/:name' render={(props) => <Country {...props} />} />
        {/* http://localhost:3000/country/Mexico */}
      </Switch>
    </div>
  );
}

export default App;
