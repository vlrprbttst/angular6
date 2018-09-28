import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

@Input() cardtitle: string;
@Input() cardcontent: string;

  constructor() { }

  ngOnInit() {
      console.log(this.cardtitle, this.cardcontent)
  }

}
