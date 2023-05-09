import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  private API_KEY = '264cc9403b7c4e209031d0f21e6732de';

  keyword: string = ''; // - 
  //http: HttpClient = inject(HttpClient);

  constructor(private http: HttpClient) { }

  getNews(keyword: string) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=12&apiKey=${this.API_KEY}`);
    //return this.http.get(`https://newsapi.org/v2/top-headlines?country=hu&q=${keyword}&apiKey=${this.API_KEY}`);
  }

  getTopNews()
  {
        return this.http.get(`https://newsapi.org/v2/top-headlines?country=hu&pageSize=5&apiKey=${this.API_KEY}`);
  }
}
