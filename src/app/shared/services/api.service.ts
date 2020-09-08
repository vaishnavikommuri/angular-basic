import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const proxyUrl = "https://cors-anywhere.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 
  get(params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${proxyUrl}https://newsapi.org/v2/top-headlines`,{ params });  
  }

}
 