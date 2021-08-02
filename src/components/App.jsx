import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Footer } from "./Footer/index.jsx";
import { Header } from "./Header/index.jsx";
import "./index.css";

export default function App() {
  return (
    <div id="live">
      <Router>
        <Header />
        <div id="live_container">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/login" component={() => <Login />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
