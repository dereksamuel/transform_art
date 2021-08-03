import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Footer } from "./Footer/index.jsx";
import { Header } from "./Header/index.jsx";
import "./index.css";

export default function App() {
  const currentUser = useSelector((state) => state.login.currentUser);

  return (
    <div id="live">
      <Router>
        <Header />
        <div id="live_container">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/login" component={() => <Login />} />
            {
              currentUser ? (
                <Route exact path="/edit_app" component={() => <Home />} />
              ) : (
                <Redirect exact to="/login" />
              )
            }
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
