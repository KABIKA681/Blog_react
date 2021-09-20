import Home from "./components/pages/home/Home"
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
      <Router>
        <Topbar />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home/> : <Register />}
          </Route>
          <Route path="/login">
          {user ? <Home/> : <Login />}
          </Route>
          <Route path="/settings">
          {user ? <Settings/> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/write">
          {user ? <Write/> : <Register />}
          </Route>
          </Switch>  
        </Router>
      
  );
}

export default App;