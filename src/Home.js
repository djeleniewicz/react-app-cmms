import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button color="link">
            {" "}
            <Link to="/accidents"> Manage Accidents </Link>
          </Button>
          <Button color="link">
            {" "}
            <Link to="/users"> Manage Users </Link>
          </Button>
        </Container>{" "}
      </div>
    );
  }
}

export default Home;
