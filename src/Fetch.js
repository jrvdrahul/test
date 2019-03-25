import React, { Component } from 'react';
import './App.css';
import loader from "./throbber_12.gif"

class App extends Component {

  constructor(props){
    super(props);
    
    this.method();
  }

  method=()=>{

    setTimeout(() => {
      this.props.change();
    }, 2000);
    
  }
  


  render() {
    return (
      <div>
        
        <div className="top-bar">
          Hello Joanne!
        </div>

        <div class="card box">
        <div className="card-head">Fetching Contacts</div>
          <div class="card-body row  pad100 text-center">


          <div><img src={loader} /></div>


            <div>Please wait while we fetch your contacts</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
