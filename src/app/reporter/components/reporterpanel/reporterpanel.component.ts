import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
import {ReporterService} from '../../reporter.service';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reporterpanel',
  templateUrl: './reporterpanel.component.html',
  styleUrls: ['./reporterpanel.component.scss']
})
export class ReporterpanelComponent implements OnInit {

token:any;
dataResponse:any;
data:any = [];

loginFormModalEmail = new FormControl('', Validators.email);
 loginFormModalPassword = new FormControl('', Validators.required);

  constructor(private _router : Router,private _service :ReporterService) {
    if(sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          this.getToken(value);
          console.log(key, value);
          console.log("teoken" , this.token);
          this._service.getMyReporterProfile(this.token).
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
      // console.log("value of pnrNo." , typeof (JSON.stringify(params['id'])));
      // console.log(parseInt(s));
        // var email = params['id'];
        // console.log(email);
     // for(let val of this.orgdata){
     //   if(value.postedBy ==  )
    // }
  // });
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
      this.dataResponse = value;
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
newsPostedByReporter(){
  console.log(this.dataResponse);
  this._service.getNewsPostedByReporter(this.token)
  .subscribe(
    data => {
      console.log(data);
      this.data = data;
    },
    err => console.log(err)
  );
}
}
