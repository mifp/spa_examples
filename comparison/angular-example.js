import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-home',
  template: `<h1>Home Page</h1>`
})
export class HomeComponent { }

@Component({
  selector: 'app-login',
  template: `<h1>Login Page</h1>`
})
export class LoginComponent { }

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

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/status">Status</a></li>
        <li><a routerLink="/submit-data">Submit Data</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'status', component: StatusComponent },
  { path: 'submit-data', component: SubmitDataComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StatusComponent,
    SubmitDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule
