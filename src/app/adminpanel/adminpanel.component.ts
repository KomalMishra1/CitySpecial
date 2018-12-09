import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

token:any;
data:any;

  constructor(private _router : Router,private _service :AppserviceService) {
    if(sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          this.getToken(value);
          console.log(key, value);
          console.log("teoken" , this.token);
          this._service.getMyAdminProfile(this.token).
          subscribe(
            data=> {
              this.checkAuthorization(data);
              console.log(data);
            },
            error=>console.log(error));


    }
  }
  else {
    alert("Request Timed Out login Again");
    this._router.navigate(['/login']);

  }
}

  ngOnInit() {
  }

  getToken(value)
  {
    let val = JSON.parse(value);
    console.log("in method" , typeof(val));
    console.log("token" , val.token);
    this.token = val.token;
  }

  checkAuthorization(value) {
    if(value.status == 200){
      this.data = value;
    }
    else {
      alert("some error occurred login Again");
    }
  }

logout() {
  if(sessionStorage.length > 0){
  for (let i = 0; i < sessionStorage.length; i++){
  let key = sessionStorage.key(i);
 sessionStorage.removeItem(key);
}
}
}
viewReporter(){
this._router.navigate(['/reporterlist']);
}
ViewAllReporter(){
this._router.navigate(['/reporterlist']);

}
}
