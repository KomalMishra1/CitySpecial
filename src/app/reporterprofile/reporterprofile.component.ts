import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reporterprofile',
  templateUrl: './reporterprofile.component.html',
  styleUrls: ['./reporterprofile.component.scss']
})
export class ReporterprofileComponent implements OnInit {


  token:any;
  data:any;

  constructor(private _router : Router,private _service :AppserviceService , private route: ActivatedRoute ) {
    this.route.params.subscribe(params => {
      var id  = params['id'];
      console.log(typeof id);

    if(sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          this.getToken(value);
          console.log(key, value);
          console.log("teoken" , this.token);
          this._service.getFullReporterProfile(this.token , id).
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
  });
   }

  ngOnInit() {
  }

  checkAuthorization(value) {
    if(value.status == 200){
      this.data = value;
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

}
