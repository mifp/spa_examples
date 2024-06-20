import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Status from './components/Status';
import SubmitData from './components/SubmitData';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/status">Status</Link></li>
          <li><Link to="/submit-data">Submit Data</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/status" component={Status} />
        <Route path="/submit-data" component={SubmitData} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;