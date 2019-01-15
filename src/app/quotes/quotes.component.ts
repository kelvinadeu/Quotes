import { Component, OnInit,Input } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes = [
      //new Quotes(1,'live your life a quarter mile at a time','created by Denzel'),
      // new Quotes(2,'every mad person thinks','created by Adeu'),
      // new Quotes(3,'not all born in the jungle dies in the jungle','created by Watii'),
    ]
    addNewQuotes(quotes){
       let quotesLength = this.quotes.length;
       quotes.id=quotesLength+1;
       quotes.completeDate = new Date(quotes.completeDate)
       this.quotes.push(quotes)

   }
   quotesDelete(isComplete,index){
     if(isComplete){
       let toDelete=confirm('Are you sure you want to delete this quote')

       if(toDelete){
         this.quotes.splice(index,1)
       }
     }
   }


  constructor() { }

  ngOnInit() {
  }

}
