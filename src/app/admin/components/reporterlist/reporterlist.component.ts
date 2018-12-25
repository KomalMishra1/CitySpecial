import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../admin.service';


@Component({
  selector: 'app-reporterlist',
  templateUrl: './reporterlist.component.html',
  styleUrls: ['./reporterlist.component.scss']
})
export class ReporterlistComponent implements OnInit {


  token:any;
  list:any;

  constructor(private _router : Router,private _service :AdminService) {
    if(sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          this.getToken(value);
          console.log(key, value);
          console.log("teoken" , this.token);
          this._service.getAllReportersList(this.token).
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


  checkAuthorization(value) {
    if(value.status == 200){
      this.list = value;
    }
    else {
      alert("some error occurred login Again");
    }
  }

  getToken(value)
  {
    let val = JSON.parse(value);
    console.log("in method" , typeof(val));
    console.log("token" , val.token);
    this.token = val.token;
  }
  viewFullReporter(value){
    this._router.navigate(['/reporterprofile' , value]);
  }
}
