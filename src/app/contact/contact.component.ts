import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private cookie: CookieService, private http: HttpClient) {}
  ngOnInit(): void {
    const baseUrl = environment.baseUrl;
    if (this.cookie.get('user_id') && this.cookie.get('user_token')) {
      const userId = this.cookie.get('user_id');
      const userToken = this.cookie.get('user_token');
      const response = this.http.get(
        baseUrl + `/page/visit/${userId}/${userToken}/4`
      );
      response.subscribe(() => {});
    }
    const pageVisit = this.http.get(baseUrl + '/website/visit/4');
    pageVisit.subscribe(() => {});
  }
}
