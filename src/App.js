import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/PortfolioPage";
import "./style/index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/react-portfolio" />
          </Route>
          <Route exact path="/react-portfolio" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
