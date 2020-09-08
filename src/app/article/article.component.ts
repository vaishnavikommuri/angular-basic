import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../shared/services/results.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article=null;
  constructor(private resultsService:ResultsService) { }

  ngOnInit(): void {
       this.gotArticle();
  }
  gotArticle(){
      this.resultsService.article.subscribe(result=>{
       this.article=result;
      })
  }

}
