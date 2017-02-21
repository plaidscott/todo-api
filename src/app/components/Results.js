/* eslint-disable */
import React, {Component} from 'react';

class Results extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hi there from Results</h1>
        {this.props.listResults}
        {this.props.userList}
      </div>
    );
  }
}

export default Results;
