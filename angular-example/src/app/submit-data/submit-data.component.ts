import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit-data',
  template: `
    <h1>Submit Data Page</h1>
    <form (submit)="handleSubmit($event)">
      <label>
        Field:
        <input type="text" name="field" [(ngModel)]="formData.field" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `
})
export class SubmitDataComponent {
  formData = { field: '' };

  constructor(private http: HttpClient) { }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.http.post('https://your-swagger-api-endpoint/submit', this.formData)
      .subscribe(response => alert('Data submitted successfully'), error => console.error('Error submitting data:', error));
  }
}