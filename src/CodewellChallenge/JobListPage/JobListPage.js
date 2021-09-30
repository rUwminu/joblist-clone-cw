import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/index";
import Home from "./pages/Home";

const JobListPage = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default JobListPage;
