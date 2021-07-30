import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

import './App.scss';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  const superBasicLoginYeah = id => {
    axios
      .post("/api/login", { data: { id } })
      .then(res => setUser(res.data))
  }

  return (
    <Router>
      <div className="App">
        <header>
          <button onClick={() => superBasicLoginYeah(1)}>Login as user 1</button>
          <button onClick={() => superBasicLoginYeah(2)}>Login as user 2</button>
          <button onClick={() => superBasicLoginYeah(3)}>Login as user 3</button>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/maps">
              <Maps />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard name={user.name} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
