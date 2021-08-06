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
const apiKey = finnhub.ApiClient.instance.authentications["api_key"];
apiKey.apiKey = "<API_key>";
const finnhubClient = new finnhub.DefaultApi();

const App = () => {
  const [user, setUser] = useState("");

  const login = (email) => {
    axios.post("/user/login", { email }).then((res) => setUser(res.data));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <header>
          {/* <Nav loggedIn={user} /> */}
          <Logout user={user} login={login} logout={logout} />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              {!user && <Intro />}
              {user && <Home />}
            </Route>
            <Route path="/details/:symbol">
              <Details user={user} />
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
};

export default App;
