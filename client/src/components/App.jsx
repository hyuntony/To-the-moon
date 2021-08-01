import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

import Nav from './Nav';
import Home from './Home';
import Intro from './Intro';
import Details from './Details';
import History from './History';

import './App.scss'


function App() {
  const [user, setUser] = useState(true)

  const superBasicLoginYeah = id => {
    axios
      .post("/api/login", { data: { id } })
      .then(res => setUser(res.data))
  }

  return (
    <Router>
      <div className="App">
        <header>
          <Nav loggedIn={user}/>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              {user && <Home />}
              {!user && <Intro />}
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            {/* <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
