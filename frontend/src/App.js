import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import PropertyList from "./components/PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import Favorites from "./components/Favorites";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/properties/:id" component={PropertyDetails} />
          <Route path="/properties" component={PropertyList} />
          <Route path="/favorites">
            <Favorites token={token} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
