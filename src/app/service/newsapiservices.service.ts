import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //News Api Url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=8b9a24263e624584b979d1354d501942";

  //Tech News Api Url
  techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=8b9a24263e624584b979d1354d501942";

  //Business News Api Url
  businessNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=8b9a24263e624584b979d1354d501942";

  //Top Heading
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //Technology news
  techNews(): Observable<any> {
    return this._http.get(this.techNewsApiUrl);
  }

  //Business news
  businessNews(): Observable<any> {
    return this._http.get(this.businessNewsApiUrl);
  }
}