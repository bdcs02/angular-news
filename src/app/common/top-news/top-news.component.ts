import { Component } from '@angular/core';
import { GetNewsService } from 'src/app/service/get-news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent {
  searchText: string = '';
  constructor(private topnewsService: GetNewsService) {}

  data: any;


  ngOnInit()
  {
    this.topnewsService.getTopNews().subscribe((result) =>
    {
      console.log(result);
      this.data = result;
    }) 
  }
}
