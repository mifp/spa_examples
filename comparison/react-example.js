import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const Login = () => (
  <div>
    <h1>Login Page</h1>
  </div>
);

const Status = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://your-swagger-api-endpoint/status')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Status Page</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

const SubmitData = () => {
  const [formData, setFormData] = useState({ field: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://your-swagger-api-endpoint/submit', formData)
      .then(response => alert('Data submitted successfully'))
      .catch(error => console.error('Error submitting data:', error));
  };

  return (
    <div>
      <h1>Submit Data Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Field:
          <input type="text" name="field" value={formData.field} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

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

ReactDOM.render(<App />, document.getElementById('root'));
