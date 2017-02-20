/* eslint-disable */
import React, {Component} from 'react';

class Results extends Component {
  render() {
    console.log('this.props in results.js', this.props)
    return (
      <div className="jumbotron">
        <h1>Hi there from Results</h1>

      </div>
    );
  }
}

export default Results;
