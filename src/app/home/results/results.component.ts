import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/services/results.service'
import { FilterService } from 'src/app/shared/services/filter.service';
import { ArticleListConfig } from 'src/app/shared/services/models/article-list-config.model';
import { Article } from 'src/app/shared/services/models/article.model';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  
  constructor(
    private filterService: FilterService,
    private resultsService: ResultsService
    ) { }

  ngOnInit() {
    this.runQuery();
  }
  query: ArticleListConfig
  results: Article[];
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage=pageNumber;
    this.runQuery();
  }

  runQuery(){
    
    this.results = [];

    this.filterService.queries.subscribe(result=>{
      this.query=result;
      this.query.page=this.currentPage;
      this.resultsService.query(this.query)
    .subscribe(data => {
      this.results = data.articles;
      if(this.query.pageSize){
        this.totalPages = Array.from(new Array(Math.ceil(data.totalResults/this.query.pageSize)), (val, index) => index + 1);   
      } 
   });
   });
  }
    open(article){
      this.resultsService.getArticle(article);
        
    }
  }