import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReporterService {

  constructor(private _http : HttpClient) { }

  getNewsPostedByReporter(body : any){
    return this._http.get('https://cityspecial.herokuapp.com/api/reporter/fetchMyNews', {
       responseType : 'json',
       headers:new HttpHeaders().append('Authorization' , body)
    });
  }

  getMyReporterProfile(body : any){
    return this._http.get('https://cityspecial.herokuapp.com/api/reporter/viewMyProfile' , {
     responseType : 'json',
     headers:new HttpHeaders().append('Authorization' , body)
  });
  }
}
