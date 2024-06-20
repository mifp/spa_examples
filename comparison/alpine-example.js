<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alpine.js Example</title>
  <script src="https://cdn.jsdelivr.net/npm/alpinejs" defer></script>
</head>
<body>
  <div x-data="{ page: 'home', formData: { field: '' }, data: null }">
    <nav>
      <ul>
        <li><a href="#" @click.prevent="page = 'home'">Home</a></li>
        <li><a href="#" @click.prevent="page = 'status'; fetchStatus()">Status</a></li>
        <li><a href="#" @click.prevent="page = 'submitData'">Submit Data</a></li>
      </ul>
    </nav>
    
    <div x-show="page === 'home'">
      <h1>Home Page</h1>
    </div>

    <div x-show="page === 'login'">
      <h1>Login Page</h1>
    </div>

    <div x-show="page === 'status'">
      <h1>Status Page</h1>
      <pre x-text="JSON.stringify(data, null, 2)"></pre>
    </div>

    <div x-show="page === 'submitData'">
      <h1>Submit Data Page</h1>
      <form @submit.prevent="submitData">
        <label>
          Field:
          <input type="text" x-model="formData.field">
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>

    <script>
      function fetchStatus() {
        fetch('https://your-swagger-api-endpoint/status')
          .then(response => response.json())
          .then(data => this.data = data)
          .catch(error => console.error('Error fetching data:', error));
      }

      function submitData() {
        fetch('https://your-swagger-api-endpoint/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.formData)
        })
        .then(response => response.json())
        .then(data => alert('Data submitted successfully'))
        .catch(error => console.error('Error submitting data:', error));
      }
    </script>
  </div>
</body>
</html>
