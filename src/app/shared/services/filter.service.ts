import { Injectable } from '@angular/core';
import { ArticleListConfig } from './models/article-list-config.model';
import { BehaviorSubject } from 'rxjs';
import { ResultsService } from './results.service';


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  categories=['business','entertainment','general','health','science','sports','technology'];
  countries=[
    {
      key:'ae',
      value:'Arab Emirates'
    },
    {
    key: 'ar',
    value: ' Argentina'
    },
    {
    key: 'at',
    value: 'Austria'
    },
    {
    key: 'au',
    value: 'Australia'
    },
    {
    key: 'be',
    value: 'Belgium'
    },
    {
    key: 'bg',
    value: 'Bulgaria'
    },
    {
    key: 'br',
    value: 'Brazil'
    },
    {
    key: 'ca',
    value: 'Canada'
    },
    {
    key: 'ch',
    value: 'Switzerland'
    },
    {
    key: 'cn',
    value: 'China'
    },
    {
    key: 'co',
    value: 'Colombia'
    },
    {
    key: 'cu',
    value: 'Cuba'
    },
    {
    key: 'cz',
    value: 'Czech Republic'
    },
    {
    key: 'de',
    value: 'Germany'
    },
    {
    key: 'eg',
    value: 'Egypt'
    },
    {
    key: 'fr',
    value: 'France'
    },
    {
    key: 'gb',
    value: 'United Kingdom (Great Britain)'
    },
    {
    key: 'gr',
    value: 'Greece'
    },
    {
    key: 'hk',
    value: 'Hong Kong'
    },
    {
    key: 'hu',
    value: 'Hungary'
    },
    {
    key: 'id',
    value: 'Indonesia'
    },
    {
    key: 'ie',
    value: 'Ireland'
    },
    {
    key: 'il',
    value: 'Israel'
    },
    {
    key: 'in',
    value: 'India'
    },
    {
    key: 'it',
    value: 'Italy'
    },
    {
    key: 'jp',
    value: 'Japan'
    },
    {
    key: 'kr',
    value: 'Korea(South)'
    },
    {
    key: 'lt',
    value: 'Lithuania'
    },
    {
    key: 'lv',
    value: 'Latvia'
    },
    {
    key: 'ma',
    value: 'Morocco'
    },
    {
    key: 'mx',
    value: 'Mexico'
    },
    {
    key: 'my',
    value: 'Malaysia'
    },
    {
    key: 'ng',
    value: 'Nigeria'
    },
    {
    key: 'nl',
    value: 'Netherlands'
    },
    {
    key: 'no',
    value: 'Norway'
    },
    {
    key: 'nz',
    value: 'New Zealand'
    },
    {
    key: 'ph',
    value: 'Philippines'
    },
    {
    key: 'pl',
    value: 'Poland'
    },
    {
    key: 'pt',
    value: 'Portugal'
    },
    {
    key: 'ro',
    value: 'Romania'
    },
    {
    key: 'rs',
    value: 'Serbia'
    },
    {
    key: 'sa',
    value: 'Saudi Arabia'
    },
    {
    key: 'se',
    value: 'Sweden'
    },
    {
    key: 'sg',
    value: 'Singapore'
    },
    {
    key: 'si',
    value: 'Slovenia'
    },
    {
    key: 'sk',
    value: 'Slovakia'
    },
    {
    key: 'th',
    value: 'Thailand'
    },
    {
    key: 'tr',
    value: 'Turkey'
    },
    {
    key: 'tw',
    value: 'Taiwan'
    },
    {
    key: 'ua',
    value: 'Ukraine'
    },
    {
    key: 'us',
    value: 'United States of America'
    },
    {
    key: 've',
    value: 'Venezuela'
    },
    {
    key: 'za',
    value: 'Zambia'
    }
  ];

  public queries=new BehaviorSubject({} as ArticleListConfig);
  
  constructor(private resultsService:ResultsService) { }

   getQuery(query){
    this.queries.next(query);
   }    
}
