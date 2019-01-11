import { Component, OnInit,Input } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes = [
      new Quotes(1,'live your life a quarter mile at a time','created by Denzel'),
      new Quotes(2,'every mad person thinks','created by Adeu'),
      new Quotes(3,'not all born in the jungle dies in the jungle','created by Watii'),
    ]

  constructor() { }

  ngOnInit() {
  }

}
