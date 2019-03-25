import React, { Component } from 'react';
import './App.css';
import ChooseFlateform from './SelectPlateform';
import Fetch from './Fetch';
import ManageList from './ManageList';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      plateform:true,
      loadComplete:false
    }
  }

  first() {

    if(this.state.plateform){
      return(
        <ChooseFlateform onSelect={this.choose}/>
      )
    }
    else if(this.state.loadComplete){
      return(
        <ManageList/>
      )
      
    }
    else{
      return(
        <Fetch change={this.changePage}/>
      );
    }
    
  }

  choose = () => {
    this.setState({
      plateform: false
    });
  }

  changePage= ()=>{
    this.setState({
      loadComplete: true
    });
  }


  render() {
    return (
      <div>
        
        {this.first()}

      </div>
    );
  }
}

export default App;
