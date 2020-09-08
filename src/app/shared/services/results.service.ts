import { Injectable, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Article } from '../../shared/services/models/article.model'
import { ArticleListConfig } from '../../shared/services/models/article-list-config.model';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ResultsService implements OnInit {
  constructor( 
     private apiService: ApiService 
    ) { }

  ngOnInit(): void {
  } 
public article=new BehaviorSubject({} as ArticleListConfig);
query(config: ArticleListConfig): Observable<{articles: Article[],totalResults: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {apiKey:'e2a8e4e2b3f147dbadd88ff01d4ef8d2',
                    country:'in',
                    pageSize:'10'
                  };

    Object.keys(config)
    .forEach((key) => {
      params[key] = config[key];
    });
    return this.apiService
    .get(
      new HttpParams({ fromObject : params })
    );
  }

  getArticle(article){
       this.article.next(article);
  }
                                      
}