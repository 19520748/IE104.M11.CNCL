import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./App.css"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer"
import React, { useContext } from "react";
import About from "./pages/About us/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Context } from "./context/Context";
function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home/> :<Register />}
          </Route>
          <Route path="/login">
          {user ? <Home/> :<Login />}
          </Route>
          <Route path="/write">
          {user ? <Write/> :<Register />}
          </Route>
          <Route path="/settings">
          {user ? <Settings/> :<Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
