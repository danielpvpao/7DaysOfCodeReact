import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets_&_styles/index.css';
import App from './layouts/App.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Signin from './pages/Signin.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>
);
