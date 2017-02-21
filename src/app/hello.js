/* eslint-disable */

import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';

import InputCarSpecs from './components/InputCarSpecs';
import Results from './components/Results';
import helpers from '../../utils/getUserHelper';


class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCarModel: '',
      userList: [],
      test: 'this is a test from state'
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.renderUserList = this.renderUserList.bind(this);
  };

  handleRedirect() {
    console.log('hi there from handleRedirect')
    helpers.proccessUsersInfo()
      .then((response) => {
        console.log('response from first promise', response);
        return response;
      })
      .then((users) => {
        console.log('users in second promise', users);
        this.setState({userList: users});
      })
      .catch((err) => { console.warn('err in handleredirect', err)});
  };

  renderUserList(users) {
    console.log('users', users);
    const letters = ['a', 'b', 'c', 'd', 'e'];
    return users.map((user, index) => {
      return(
            <div key={index}>
              <div><img src={user.avatar}></img>{user.first_name}, {user.last_name}</div>
            </div>
          );
    });
  };

  render() {
    console.log('rendered again');
    return(
      <div>
        {this.state.test}
        {this.state.inputCarModel}
        <InputCarSpecs inputCarModel={this.state.inputCarModel} handleRedirect={this.handleRedirect}/>
        <div>{this.renderUserList(this.state.userList)}</div>
      </div>
    );
  }
};

export default Hello;
