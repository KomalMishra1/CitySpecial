import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup=new FormGroup({
    email: new FormControl(null ,  [Validators.required,Validators.email]),
     password: new FormControl(null , Validators.required),
    loginType: new FormControl(null , Validators.required)

});

loginDetailsNew  = {
    userName: String,
    password: String
};
// loginArray = [
//   {
//     "email":"komal.1313056@kiet.edu",
//     "password":"komal123",
//     "type":"admin"
//   },
//   {
//     "email":"komallokesh123@gmail.com",
//     "password":"komal123",
//     "type":"reporter"
//   },
//   {
//     "email":"komallokesh@gmail.com",
//     "password":"komal123",
//     "type":"reporter"
//   }
// ];
loginResponse:any;
  constructor(private _router : Router,private _service :CommonService ) { }

  ngOnInit() {
  }
  login(){
    if(this.loginForm.value.email != null){
      console.log("inside if")
      console.log(this.loginForm.value);
      if(this.loginForm.value.loginType == "Reporter")
      {
         this.loginDetailsNew.userName = this.loginForm.value.email;
         this.loginDetailsNew.password = this.loginForm.value.password;
      this._service.getReporterLoginType(this.loginDetailsNew).
      subscribe(
      data=> {
          this.loginResponse=data;
          this.checkStatusReporter(this.loginResponse);
          let key = 'Item 1';
          sessionStorage.setItem(key, JSON.stringify(this.loginResponse));
        console.log(data);

      },
      error=>console.log(error));
      if(this.loginResponse.status == 200){
        this._service.sendLoginResponse(this.loginResponse);
        this._router.navigate(['/reporterpanel']);
      }
      else {
        console.log("Bad Request or Something Went Wrong")
      }
    }
    if(this.loginForm.value.loginType == "Admin")
    {
      this.loginDetailsNew.userName = this.loginForm.value.email;
      this.loginDetailsNew.password = this.loginForm.value.password;
     console.log("details of login" , this.loginDetailsNew);
      this._service.getAdminLoginType(this.loginDetailsNew).
      subscribe(
      data=> {
        this.loginResponse=data;
        this.checkStatusAdmin(this.loginResponse);
        let key = 'Item 1';
        sessionStorage.setItem(key, JSON.stringify(this.loginResponse));
        console.log(data);
      },
      err=>console.log(err));
    }
}
}
checkStatusAdmin(loginResponse){
  if(loginResponse.status == 200){
    this._service.sendLoginResponse(loginResponse);
      this._router.navigate(['/adminpanel'])
  }
  else {
    console.log("Bad Request or Something Went Wrong")
  }
}
checkStatusReporter(loginResponse){
  if(loginResponse.status == 200){
    this._service.sendLoginResponse(loginResponse);
      this._router.navigate(['/reporterpanel'])
  }
  else {
    console.log("Bad Request or Something Went Wrong")
  }
}
}

    // for(let val of this.loginArray){
    //   console.log("inside for")
    //   if(val.email == this.loginForm.value.email  && val.password == this.loginForm.value.password) {
    //     if(val.type == "reporter"){
    //       console.log(val.type);
    //       this._router.navigate(['/reporterpanel',val.email]);
    //     }
    //     else {
    //       this._router.navigate(['/adminpanel',val.email]);
    //     }
    //   }
    //     console.log(this.loginForm.value);
    // }



// export interface loginDetails {
//   email: string;
//   password: string;
// }
