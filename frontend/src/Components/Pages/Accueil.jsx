import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import "./CSS/accueil.css"
class App extends Component {
  

  render() {
    return (
      <>
      <Carousel id="imgModif" fade >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953129_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849820_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
}

export default App;