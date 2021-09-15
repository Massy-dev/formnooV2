import React, { Component } from 'react';
import {  Container, 
          Row, Col, Accordion, Breadcrumb,
          ListGroup 
        
        } from 'react-bootstrap';

import "./CSS/cours.css"
class SingleCours extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
        
        todos:[],
        chaps:[],
        chapitres:[],
        lesson:[],
        content:[],
        idDetail:'',
        lesss:'',
        
        
    }
  };
   
  
  
  async componentDidMount() {
    

    const id = this.props.match.params.id;
    console.log(id)
    
        
    var token = localStorage.getItem('token');

    const headers = { 
        'Content-Type': 'application/json',
        'Authorization':'Token '+token,
    }
    try {
      const cours = await fetch('http://127.0.0.1:8000/api/',{ headers }); // fetching the data from api, before the page loaded
      const chap = await fetch('http://127.0.0.1:8000/list-chap/'+id , { headers });
      const less = await fetch('http://127.0.0.1:8000/list-leçon/',{ headers });
      const contenu = await fetch('http://127.0.0.1:8000/list-content/',{ headers })

      const todos = await cours.json();
      const chaps = await chap.json();
      const lesson = await less.json();
      const content = await contenu.json();
      
      this.setState({
        todos,
        chaps,
        lesson,
        content

       
      });
      console.log(chaps)
      const idDetail = this.state.todos.find(item => item.id === Number(id))
     
      this.setState({
        idDetail,
       
      });
      
    
    } catch (e) {
      console.log(e);
    }
  };

  
 

  render() {
    
   
    return (
    
          <>
          <div>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/liste-cours">
                Cours 
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{this.state.idDetail.titre}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="cour-titre">
                <h1>{this.state.idDetail.titre}</h1>
            </div>
            <Container>
            
              <Row>
                <Col xs={12} sm={9}>

                  <div>
                        <Accordion defaultActiveKey="0" flush>
                          {this.state.chaps.map(item => (
                            <div id="borders">
                              <Accordion.Item eventKey={item.identifiant}>
                                <Accordion.Header><h1><b>{item.titre}</b></h1></Accordion.Header>
                                <hr/>
                                  
                                  <Accordion.Body>
                                  {this.state.lesson.filter(chap => chap.chapitre === item.id).map(less => (
                                    <div>
                                    <Accordion defaultActiveKey={less.id} flush>
                                      {this.state.content.filter(cont => cont.lesson === less.id).map(item =>(
                                        <div>

                                         <Accordion.Item eventKey={less.identifiant}>
                                            <Accordion.Header><h3>{less.titre}</h3></Accordion.Header> <hr/>
                                              
                                              <Accordion.Body>
                                              <h4>{item.titre}</h4>
                                              <p>{item.description}</p>
                                              </Accordion.Body>
                                          </Accordion.Item>
                                        </div>
                                      ))}
                                      </Accordion>
                                    </div>
                                  
                                  
                                  ))}
                                  </Accordion.Body>
                              </Accordion.Item>
                            </div>
                            
                          ))}
                        </Accordion>
                        </div>
                     
                </Col>
                <Col xs={6} sm={3}>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Objectifs pédagogiques
                  </ListGroup.Item>
                  <ListGroup.Item as="li">comprendre le fonctionnement de React.</ListGroup.Item>
                  <ListGroup.Item as="li">
                  créer une application React complète avec Create React App.
                  </ListGroup.Item>
                  <ListGroup.Item as="li">stocker et récupérer des données avec le state et les effets.</ListGroup.Item>
                </ListGroup>
                </Col>
              </Row>
            </Container>
    
        
          
        </div>
     </>
    )
  };
 


}

export default SingleCours;