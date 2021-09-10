myLogout(e){
    e.preventDefault()
    var url = 'http://127.0.0.1:8000/rest-auth/logout/'
    fetch(url, {
      method:'post',
      headers:{

          'Accept': 'application/json, text/plain, ',
          'Content-type':'application/json',
          'Authorization':'Token '+localStorage.getItem('token'),
      },
      
      }).then((response)  => {
        localStorage.clear()
        console.log('Logout '+localStorage.getItem('token'))
        
          
      }).catch(function(error){
      console.log('ERROR:', error)
      })
  }
  this.myLogout = this.myLogout.bind(this)
  <input type='button' value="deconnexion" onClick={this.myLogout} />


  var token = localStorage.getItem('token');
  async componentDidMount() {

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
  }