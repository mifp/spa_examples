<template>
  <div>
    <h1>Submit Data Page</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Field:
        <input type="text" v-model="formData.field" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SubmitData',
  data() {
    return {
      formData: { field: '' }
    };
  },
  methods: {
    handleSubmit() {
      axios.post('https://your-swagger-api-endpoint/submit', this.formData)
        .then(response => alert('Data submitted successfully'))
        .catch(error => console.error('Error submitting data:', error));
    }
  }
};
</script>
