import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {

            username:'',
            password:'',
          
      }
      
      this.getCookie = this.getCookie.bind(this)
      this.mySubmitHandler = this.mySubmitHandler.bind(this)
      console.log("=====",localStorage.getItem('token'))
      
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
        console.log('ITEM:', this.state)
        
        var csrftoken = this.getCookie('csrftoken')

        var url = 'http://127.0.0.1:8000/rest-auth/login/'


        fetch(url, {
        method:'POST',
        headers:{

            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify(this.state)
        }).then(data => data.json())
        .then(data => {
            console.log("=====",data.key);
            localStorage.setItem('token', data.key);
            
           
        }
        ).catch(function(error){
        console.log('ERROR:', error)
        })

    }
    
    myChangeHandler = (e) =>{
      var nam = e.target.name
      var val = e.target.value
      console.log(nam)
      console.log(val)

      this.setState({
        [nam]: val
    });
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
            <h1>Hello {this.state.username} {this.state.password}</h1>
            <p>Enter your username:</p>
            <input type='text' name='username' value={this.state.username} onChange={this.myChangeHandler}  />

            <p>Enter your password:</p>
            <input type='password' name='password' value={this.state.password} onChange={this.myChangeHandler} />

            <input type='submit' />
        </form>
      );
    }
  }
  
  export default Login;