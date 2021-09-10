import React, { Component } from 'react';
//import CreateCour from './CreateCour' 
import {
  BrowserRouter as Router,
  Link,
  
}from "react-router-dom";
import { Card, Row, Col, 
          Button, Container,
          Breadcrumb
         } from 'react-bootstrap'
//import SingleCours from './SingleCours';

class ListCours extends Component {
  state = {
    todos: []
  };

   
  
  
  async componentDidMount() {
    
    var token = localStorage.getItem('token');

    const headers = { 
        'Content-Type': 'application/json',
        'Authorization':'Token '+token,
    }
    try {
      const res = await fetch('http://127.0.0.1:8000/api/',{ headers }); // fetching the data from api, before the page loaded
      const todos = await res.json();
      console.log(todos);
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  };

  
  

  render() {
    return (
      <>
        <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          
          <Breadcrumb.Item active>Cours</Breadcrumb.Item>
        </Breadcrumb>
          <Router>

            <Row xs={1} md={2} className="g-4">
              {this.state.todos.map(item => (
                <Col key={item.id}>
                  <Card >
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg" />
                    <Card.Body>
                      <Card.Title>{item.titre}</Card.Title>
                      <Card.Text>{item.description.substring(0, 150)}</Card.Text>
                      <Link to={`/cour-detail/${item.id}`}><Button variant="primary">S'inscrire</Button></Link>
                    </Card.Body>
                  </Card>
                </Col>
              
              ))}
              
            </Row>
          </Router>
        </Container>
      </>
    );
    
  };
  
 


}

export default ListCours;