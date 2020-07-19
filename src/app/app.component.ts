import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private cookie: CookieService, private http: HttpClient) {}
  ngOnInit(): void {
    const baseUrl = environment.baseUrl;
    if (!this.cookie.get('user_id') || !this.cookie.get('user_token')) {
      const response = this.http.get(baseUrl + '/register/user');
      response.subscribe((data: any) => {
        this.cookie.set('user_id', data.user_id, 180);
        this.cookie.set('user_token', data.user_token, 180);
      });
    }
  }
}
