import React from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Home'
import Registerpage from './Register'
import Depositpage from './Deposit'
import Withdrawpage from './Withdraw'
import Balancequerypage from './Balancequery'
import Formpage from './Form'
import Balancequery from "./Balancequery";
export default function App() {
  
  return (
    <Router>

      <nav class="navbar navbar-expand-lg navbar-light App-header">
        <div class="container ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
            <li class="nav-item">
                <Link class="nav-link " to="/Register">Register</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Deposite">Balance_Deposite</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Withdraw">Balance_Withdraw</Link>
            </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Query">Balance_query</Link>
              </li>
          </ul>
        </div>
        </div>
      </nav>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/Register">
            <Register/>
          </Route>

          <Route path="/Deposite">
            <Deposit/>          
          </Route>

          <Route path="/Withdraw">
            <Withdraw/>
          </Route>

          <Route path="/Query">
            <Balance/>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Homepage></Homepage>
}

function Register() {
  return <Registerpage></Registerpage>
}

function Deposit() {
  return <Depositpage></Depositpage>;
}
function Withdraw() {
  return <Withdrawpage/>
}

function Balance() {
  return <Balancequerypage/>
  

}