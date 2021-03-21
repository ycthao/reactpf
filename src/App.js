import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/PortfolioPage";
import "./style/index.css";
import Wrapper from "./components/Wrapper/wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Redirect to="/reactpf" />
            </Route>
            <Route exact path="/reactpf" component={Home}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
