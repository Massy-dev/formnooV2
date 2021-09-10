import React, { Component } from 'react';
import SingleCours from './SingleCours'
import Accueil from './Accueil'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
}from "react-router-dom";
import ListCours from './ListCours';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,} from 'react-bootstrap'

class App extends Component {
  

  render() {
    return (
      <>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Formnoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/liste-cours">Cours</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>





        <Switch>
        <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/liste-cours">
            <ListCours />
          </Route>
          
          <Route  path="/cour-detail/:id" >
            <SingleCours />
          </Route>
        </Switch>
      </Router>

     </>
    );
  }
}

export default App;