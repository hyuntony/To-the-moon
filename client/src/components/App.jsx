import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Nav from "./Nav";
import Logout from "./Logout";
import Home from "./Home";
import Intro from "./Intro";
import Details from "./Details";
import History from "./History";
import About from "./About";

import "./App.scss";
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "<API_key>";
const finnhubClient = new finnhub.DefaultApi();
function App() {
  const [user, setUser] = useState(true);

  const superBasicLoginYeah = (id) => {
    axios.post("/api/login", { data: { id } }).then((res) => setUser(res.data));
  };

  return (
    <Router>
      <div classNameName="App">
        <header>
          {/* <Nav loggedIn={user} /> */}
          <Logout loggedIn={user} />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              {!user && <Intro />}
              {user && <Home />}
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/about">
              <About />
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
