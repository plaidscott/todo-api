/* eslint-disable */

import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import InputCarSpecs from './components/InputCarSpecs';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCarModel: ''
    };
  }
  handleRedirect(newModel) {
    console.log('newmodel', newModel);
    this.setState({
        inputCarModel: newModel
      });
      // console.log('this.state.inputCarModel', this.state.inputCarModel)
      setTimeout( () => { console.log(this.state.inputCarModel)}, 2000)
    // browserHistory.push('/results');
  }
  render() {
    return (
      <div>
        <InputCarSpecs inputCarModel={this.state.inputCarModel} handleRedirect={this.handleRedirect.bind(this)}/>
        <p>{this.state.inputCarModel}</p>

      </div>
    );
  }
};

export default Hello;
