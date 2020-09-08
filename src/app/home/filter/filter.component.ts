import { Component, OnInit} from '@angular/core';
import { ArticleListConfig } from 'src/app/shared/services/models/article-list-config.model';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit  {
  
  ngOnInit() {
    this.reSelectForm();  
  } 

  constructor(private filterService: FilterService){ }
  queries: ArticleListConfig;
  categories=this.filterService.categories;
  countries=this.filterService.countries;
  
  reSelectForm(){
    const empty={
      q: '',
      category: '',
      country: 'in',
      pageSize: 10,
      page: 1
    }
    this.queries=empty;
  }
  saved(query){
    this.filterService.getQuery(query);
  }                                
}
  
