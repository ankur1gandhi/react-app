import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Begin from "./components/begin";
import Product from "./components/product";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Route path="/begin" component={Begin} />
          <Route path="/product" component={Product} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
