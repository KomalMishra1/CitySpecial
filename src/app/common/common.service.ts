import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

loginResponse:any;

  constructor(private _http : HttpClient) { }

  getNews(){
    return this._http.get('https://cityspecial.herokuapp.com/api/user/fetchNews', {
       responseType : 'json',
    });
  }

  getReporterLoginType(body : any){
    return this._http.post('https://cityspecial.herokuapp.com/api/reporter/login', body , {
     responseType : 'json',
     headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
  }

  getAdminLoginType(body : any){
      console.log("inside service" ,  body);
    return this._http.post('https://cityspecial.herokuapp.com/api/admin/login', body, {
     responseType : 'json',
     headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
  }

  sendNewsToAdmin(body : any , token : any){
      console.log("inside service" ,  body);
    return this._http.post('https://cityspecial.herokuapp.com/api/admin/addNews', body, {
     responseType : 'json',
     headers:new HttpHeaders().append('Authorization' , token )
  });
  }

  sendNewsToReporter(body : any , token:any){
      console.log("inside service" ,  body);
    return this._http.post('https://cityspecial.herokuapp.com/api/reporter/addNews', body, {
     responseType : 'json',
     headers:new HttpHeaders().append('Authorization' , token )
  });
  }

  sendLoginResponse(body : any) {
      this.loginResponse = body;
  }
}
