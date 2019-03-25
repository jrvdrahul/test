import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const data=[
    {
        name:'rahul',
        email:'rahul@gmail.com',
        phone:'489575485',
        location:'delhi',
        age:'20-30'
    },
    {
        name:'rohit',
        email:'rohit@gmail.com',
        phone:'489575485',
        location:'agra',
        age:'20-30'
    },
    {
        name:'nitin',
        email:'nitin@gmail.com',
        phone:'489575485',
        location:'noida',
        age:'20-30'
    },
    {
        name:'deepak',
        email:'deepak@gmail.com',
        phone:'489575485',
        location:'agra',
        age:'15-20'
    },
    {
        name:'mohit',
        email:'mohit@gmail.com',
        phone:'489575485',
        location:'agra',
        age:'30-40'
    }
]

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            data:data,
            result:data
        }
        this.filterList = this.filterList.bind(this);
    }


    
    filterList(event) {
        console.log('aaaaaaaaa',this.state.result)
        let value = event.target.value;
        let users = this.state.data, result=[];
        result = users.filter((user)=>{
            return user.name.toLowerCase().search(value) != -1;
        });
        this.setState({result});
    }

  render() {
     let data=this.state.result;
    return (
      <div>
        
        <div className="top-bar">
          Hello Joanne!
        </div>

        <div class="card box">
        <div>Contacts</div>
          <div class="card-body">
            
            <input type="search" className="form-control" placeholder="Search Contact" onChange={this.filterList}/>

            <div style={{padding:"20px",float:"right"}}><Link to="/manageList"> Manage List</Link></div>


            <table class="table table-striped">
                <tbody>
                    {data.map((data,index)=>
                        <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                    </tr>
                    )}
                
                </tbody>
            </table>
            
          </div>
        </div>

        

      </div>
    );
  }
}

export default App;
