/* eslint-disable*/
import React, {Component} from 'react';

class InputCarSpecs extends Component{
  constructor(props){
    super(props);
    this.state = {
      tempCar: ''
    };
  };
  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>This is an Awesome car searching App!</h1>
          <div className="input-group col-lg-3">
            <span className="input-group-btn"><button className="btn btn-primary" onClick={() => {this.props.handleRedirect()}}>Submit</button></span>
            <input className="form-control" type="text" placeholder="model of car you like" onChange={(event) => {this.setState({tempCar: event.target.value})}} />
          </div>
        </div>
      </div>
    );
  };
}

export default InputCarSpecs;
