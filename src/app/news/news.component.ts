import { Component } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import {MatCardModule} from '@angular/material';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

mArticles: Array<string>;
mSources: Array<string>;

constructor(private newsapi: NewsApiService) {}

    ngOnInit() {
            //load articles
           this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
          //load news resources
         this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
    }

    searchArticles(source){
         this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
    }
}
