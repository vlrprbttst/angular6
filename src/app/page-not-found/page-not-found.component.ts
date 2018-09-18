import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {


 ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('page404');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('page404');
  }


  constructor() { }
}
