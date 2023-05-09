import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GetNewsService } from 'src/app/service/get-news.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  
  searchText: string = '';
  constructor(private newsService: GetNewsService) {}

  data: any;

  defaultImg: string =  "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";

  searchNews(searchText: string)
  {
    this.newsService.getNews(searchText).subscribe((result) =>
    {
      console.log(result);
      this.data = result;
    });
}
}
