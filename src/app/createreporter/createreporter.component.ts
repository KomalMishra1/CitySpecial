import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-createreporter',
  templateUrl: './createreporter.component.html',
  styleUrls: ['./createreporter.component.scss']
})
export class CreatereporterComponent implements OnInit {

  createreporterform : FormGroup=new FormGroup({
    Name: new FormControl('', Validators.required),
    UserName : new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required , Validators.email]),
    Password: new FormGroup({
          password: new FormControl('', [Validators.required, Validators.minLength(8)]),
          cpassword: new FormControl('', [Validators.required, Validators.minLength(8)])
      }),
      gender: new FormControl('', Validators.required),
      Address  : new FormGroup(
        {
          address1: new FormControl('', [Validators.required]),
          street : new FormControl('', [Validators.required]),
          city : new FormControl('', Validators.required),
          state : new FormControl('', Validators.required),
          zipcode : new FormControl('', Validators.required)
        }
      ),
      phoneNum : new FormControl('', Validators.required)
});

genderList =[
  "male",
  "female",
  "other"
];

token:any;
showSuccess:boolean = false ;

  constructor(private _appservice : AppserviceService) {
    if(sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          this.getToken(value);
          console.log(key, value);
          console.log("teoken" , this.token);
          }
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


createReporter(){
  if(this.createreporterform.value != null){

    console.log(this.createreporterform.value);
    this._appservice.sendReporterDetails(this.createreporterform.value , this.token).
    subscribe(
      data=> {console.log(data);
        this.showSuccess = true;
      },
      err => console.log(err)
    )
  }

}
selectGender(event){
  this.createreporterform.value.gender = event.target.value;
}
}
