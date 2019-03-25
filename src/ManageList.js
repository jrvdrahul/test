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
            selected:false,
            selectedData:[],
            family:[],
            popup:'2'
        }
    }


    transfer(data){
    
        this.setState({
          selectedData:[data],
          selected:true
        })
    
        this.state.family.push(data);
      }


      close(){
        this.setState({
          selected:false
        })
      }


      status(value){
        this.setState({popup:value})
      }


      family(){
        if(this.state.popup=='1'){
          return(
              <div class="modal-body">
              {this.state.family.map((data,index)=>
                <div data-dismiss="modal" data-toggle="modal1" data-target="#myModa1" onClick={()=>this.transfer(data)}>{data.name}</div>
              )}
            </div>
          )
        }
        else{
          return(
            <div class="modal-body">
                    Click a contact and select who is to you.

                    
                {data.map((data,index)=>
                    <div className="row">
                    <div className="col-md-9">
                        <div data-dismiss="modal" data-toggle="modal1" data-target="#myModa1" onClick={()=>this.transfer(data)}>{data.name}</div>
                        <div className="row">
                            <div className="col">{data.email}</div>
                            <div className="col">{data.phone}</div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                    </div>    
                </div>  
                )}    
                      

                </div>
          )
        }
      }

      check(){
        if(this.state.selected){
            return(
              <div class="modal1" id="myModal1">
                <div class="modal-dialog">
                  <div class="modal-content">
                  
                    
                    <div class="modal-header">
                      <h4 class="modal-title">Modal Heading</h4>
                      <button type="button" class="close" data-dismiss="modal1" onClick={()=>this.close()}>&times;</button>
                    </div>
                    
                    
                    <div class="modal-body">
                      {this.state.selectedData.map((data,index)=>
                        <div data-dismiss="modal1" onClick={()=>this.transfer(data)}>{data.name}</div>
                      )}
                    </div>
                    
                    </div>
                  </div>
                </div>
      
              )
          }
          else
          {
            return(
                <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                    
                    
                    <div class="modal-header">
                        <h4 class="modal-title">Unidentified</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    
                    {this.family()}
                    
                    
                    
                    </div>
                </div>
            </div>
            )
          }
    }

  render() {
     let data=this.state.data;

     let selectedData=this.state.selectedData;

     


     

    return (
      <div>
        
        <div className="top-bar">
          Hello Joanne!
        </div>

        <div class="card box">
        <div className="card-head">Choose your family members from the list of contacts you have updated</div>
          <div class="card-body">
            
            <div className="list-box row">
                <div className="col-md-4 family-count" data-toggle="modal" data-target="#myModal" onClick={()=>this.status('1')}>
                    Family Members<br />
                    {this.state.family.length}
                </div>
                <div className="col-md-8">
                    <div>
                        Your family members are listed here
                    </div>
                    <div>
                        Check Your friends
                    </div>    
                </div>    
            </div>
            <div className="list-box row"> 
                <div className="col-md-4" data-toggle="modal" data-target="#myModal" onClick={()=>this.status('2')}>
                    Unidentified <br /> 
                    {data.length}
                </div>
                <div className="col-md-8">
                    <div>
                        Your family members are listed here
                    </div>
                    <div>
                        Choose from the list
                    </div>    
                </div>    
            </div>
          
          </div>
        </div>
        <button type="primary"><Link to="/Contact"> contact</Link></button>



        {this.check()}

        
  
      </div>
    );
  }
}

export default App;
