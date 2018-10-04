import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { CardComponent } from './shared/card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';
//news
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

//wysiwyg
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// jquery
import * as $ from 'jquery';

const appRoutes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: 'page2', component: Page2Component },
    { path: 'page1', component: Page1Component },
    { path: '', component: Page1Component },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Page1Component,
    Page2Component,
    PageNotFoundComponent,
    CardComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeadroomModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})

export class AppModule {
    toggleClass: boolean = false;
}
