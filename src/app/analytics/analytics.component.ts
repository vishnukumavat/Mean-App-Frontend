import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  detailedAnalytics: any;
  conditionalAnalytics: any;
  constructor(private cookie: CookieService, private http: HttpClient) {}
  ngOnInit(): void {
    const baseUrl = environment.baseUrl;
    if (this.cookie.get('user_id') && this.cookie.get('user_token')) {
      const userId = this.cookie.get('user_id');
      const userToken = this.cookie.get('user_token');
      const response = this.http.get(
        baseUrl + `/page/visit/${userId}/${userToken}/5`
      );
      response.subscribe(() => {});
    }
    const pageVisit = this.http.get(baseUrl + '/website/visit/5');
    pageVisit.subscribe(() => {});
    const detailedAnalytics = this.http.get(baseUrl + '/details/analytics');
    detailedAnalytics.subscribe((data) => {
      this.detailedAnalytics = data;
    });
    const conditionalAnalytics = this.http.get(
      baseUrl + '/conditional/analytics'
    );
    conditionalAnalytics.subscribe((data) => {
      this.conditionalAnalytics = data;
    });
  }
}
