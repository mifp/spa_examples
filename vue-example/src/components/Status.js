import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

export default Status;

