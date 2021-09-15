import React, { Component } from 'react';
import SingleCours from './SingleCours'
import Accueil from './Accueil'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
}from "react-router-dom";
import ListCours from './ListCours';
import Login from '../Authentification/Login';
import Register from '../Authentification/Register';
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
              <Nav.Link href="/login">login</Nav.Link>
              <Nav.Link href="/register">
                Inscription
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

          <Route exact path="/login"> 
            <Login />
          </Route>

          <Route exact path="/register"> 
            <Register />
          </Route>
         
          <Route exact path="/cour-detail" >
            
          </Route>
          <Route exact path="/cour-detail/:id" render={(props) =>  
            <SingleCours {...props} key={props.match.params} /> 
          }  
          />
        </Switch>
      </Router>

     </>
    );
  }
}

export default App;