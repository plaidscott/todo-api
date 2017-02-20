import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Hello from './app/hello';
import Results from './app/components/Results';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
    <Route path="/results" component={Results}/>
  </Router>,
  document.getElementById('root')
);
