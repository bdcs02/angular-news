import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchForNewsComponent } from './pages/search-for-news/search-for-news.component';
import { TopNewsPageComponent } from './pages/top-news-page/top-news-page.component';

const routes: Routes = [
  {path: '', component: TopNewsPageComponent},
  {path: 'searchnews',component: SearchForNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
