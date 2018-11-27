import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

loginResponse:any;

  constructor(private _http : HttpClient) { }

  downloadFile(file : String) {
  var body = {filename : file};
  return this._http.post('https://localhost:3000/file/download' , body , {
    responseType : 'blob' ,
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

getReporterLoginType(body : any){
  return this._http.post('https://cityspecial.herokuapp.com/api/reporter/login', body , {
   responseType : 'json',
   headers:new HttpHeaders().append('Content-Type' , 'application/json')
});
}

getMyReporterProfile(body : any){
  return this._http.get('https://cityspecial.herokuapp.com/api/reporter/viewMyProfile' , {
   responseType : 'json',
   headers:new HttpHeaders().append('Authorization' , body)
});
}


getMyAdminProfile(body : any){
  return this._http.get('https://cityspecial.herokuapp.com/api/admin/viewMyProfile' , {
   responseType : 'json',
   headers:new HttpHeaders().append('Authorization' , body)
});
}

getNews(){
  return this._http.get('https://cityspecial.herokuapp.com/api/user/fetchNews', {
     responseType : 'json',
  });
}

getNewsPostedByReporter(body : any){
  return this._http.get('https://cityspecial.herokuapp.com/api/reporter/fetchMyNews', {
     responseType : 'json',
     headers:new HttpHeaders().append('Authorization' , body)
  });
}

sendNews(body : any){
    console.log("inside service" ,  body);
  return this._http.post('https://cityspecial.herokuapp.com/api/reporter/addNews', body, {
   responseType : 'json',
   headers:new HttpHeaders().append('Authorization' , body )
});
}
sendLoginResponse(body : any) {
    this.loginResponse = body;
}
}
