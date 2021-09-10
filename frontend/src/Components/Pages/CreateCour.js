import React, { Component } from 'react';
//import ListCours from './ListCours'

class CreateCour extends Component {
   
    constructor(props) {
      super(props);
      this.state = {
          donnee:{
            id:null, 
            matiere:'',
            categorie:'',
            titre:'',
            description:'',
            identifiant:'',
            createur:''
          },
            todos:[],
            cate:[]
           
          
      }
      
      this.getCookie = this.getCookie.bind(this)
      this.mySubmitHandler = this.mySubmitHandler.bind(this)
      console.log(localStorage.getItem('token'))
     // localStorage.clear()
      
      
    };

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    
    
      mySubmitHandler(e){
        e.preventDefault()
        console.log('ITEM:', this.state.donnee)
        
        var csrftoken = this.getCookie('csrftoken')

        var url = 'http://127.0.0.1:8000/create-cours/'

        var token = localStorage.getItem('token'); 
        
        fetch(url, {
        method:'post',
        headers:{

            'Accept': 'application/json, text/plain, ',
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
            'Authorization':'Token '+token,
        },
        body:JSON.stringify(this.state.donnee),
        
        }).then((response)  => {
          console.log('Token '+token)
            this.setState({
            donnee:{
            id:null, 
            matiere:'',
            categorie:'',
            titre:'',
            description:'',
            identifiant:'',
            createur:''
            },
            
            })
        }).catch(function(error){
        console.log('ERROR:', error)
        })

    }

    myChangeHandler = (e) =>{
      var nam = e.target.name
      var val = e.target.value
      console.log(nam)
      console.log(val)

      this.setState({
        
        donnee:{
          ...this.state.donnee,
          [nam]: val,
        }
    });
    }


    async componentDidMount() {
      try {
        const res = await fetch('http://127.0.0.1:8000/liste-matiere/'); // fetching the data from api, before the page loaded
        const res2 = await fetch('http://127.0.0.1:8000/liste-cate/'); 

        const todos = await res.json();
        const cate = await res2.json();
        console.log(todos,cate);
        this.setState({
          todos,
          cate
        });
      } catch (e) {
        console.log(e);
      }
    }

    
    
    render() {
      return (
        
        
        <form onSubmit={this.mySubmitHandler}>
            <h1>Hello {this.state.donnee.titre}  {this.state.donnee.matiere} {this.state.donnee.categorie} {this.state.donnee.description}</h1>
            <p>Enter your Cours:</p>
            <input type='text' name='titre' value={this.state.donnee.titre} onChange={this.myChangeHandler}  />
            
            <br/>
              <p>Choisissez votre matiere :</p> 
              <select value={this.state.donnee.matiere} name="matiere" onChange={this.myChangeHandler}>
              <option value=""></option>
              {this.state.todos.map(item => (
                <option value={item.id}>{item.titre}</option>
                ))}
              </select>

              <p>Choisissez votre cate :</p> 
              <select value={this.state.donnee.categorie} name="categorie" onChange={this.myChangeHandler}>
              <option value=""></option>
              {this.state.cate.map(item => (
                <option value={item.id}>{item.titre}</option>
                ))}
              </select>
           

            <p>Enter your Description:</p>
            <input type='text' name='description' value={this.state.donnee.description} onChange={this.myChangeHandler} />

            <input type='submit' />
           
        </form>
       
      );
    }
  }
  
  export default CreateCour;