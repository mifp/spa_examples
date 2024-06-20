import React, { useState } from 'react';
import axios from 'axios';

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

export default SubmitData;

