import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        
        <div className="top-bar">
          Hello Joanne!
        </div>

        Import your contacts
        <div class="card box">
        <div className="card-head">Select a plateform to import contact</div>
          <div class="card-body row pad100">
            <div className="col-md-4" onClick={this.props.onSelect}>
              <div className="icon-box">
                <div><i class="fab fa-google"></i></div>
              </div>
              Google  
            </div>  
            <div className="col-md-4">
            <div className="icon-box">
            <div><i class="fab fa-facebook"></i></div>
              </div>
              Facebook
            </div>
            <div className="col-md-4">
            <div className="icon-box">
            <div><i class="fas fa-address-card"></i></div>
              </div>
              Contact File
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
