import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MenuComponent } from './menu/menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardComponent } from './shared/card/card.component';
import {MatCardModule} from '@angular/material/card';


const appRoutes: Routes = [
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
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeadroomModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
    toggleClass: boolean = false;
}
