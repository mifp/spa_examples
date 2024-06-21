<template>
  <div>
    <h1>Status Page</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Status',
  data() {
    return {
      data: null
    };
  },
  created() {
    axios.get('https://your-swagger-api-endpoint/status')
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
