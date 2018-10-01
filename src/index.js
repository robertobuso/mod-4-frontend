import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
