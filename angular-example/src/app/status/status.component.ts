import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status',
  template: `
    <h1>Status Page</h1>
    <pre>{{ data | json }}</pre>
  `
})
export class StatusComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://your-swagger-api-endpoint/status')
      .subscribe(response => this.data = response, error => console.error('Error fetching data:', error));
  }
}