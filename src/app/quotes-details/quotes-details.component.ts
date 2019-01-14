import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quotes:Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quotesDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  like = 0;
  likes(){
    this.like=this.like+1;
  }

  unlike = 0
  unlikes(){
    this.unlike=this.unlike+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
