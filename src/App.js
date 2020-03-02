import React from "react";
import { HashRouter, Route } from "react-router-dom";
import about from "./routes/about";
import home from "./routes/home";
import Detail from "./routes/Detail";
import "./App.css";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={home} />
      <Route path="/about" component={about} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
