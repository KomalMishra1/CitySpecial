import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent implements OnInit {

  token:any;
  data:any;
  ndata:any=[];
  orgdata:any=[];
  showSuccessModal:boolean = false;

  constructor(private _router : Router,private _service :AppserviceService) {
    if(sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          this.getToken(value);
          console.log(key, value);
          console.log("teoken" , this.token);
          this._service.getAllNews(this.token).
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
      this.data = value;
    this.orgdata=value;
  }

  all(){
    this.data=this.orgdata;
  }

food(){

  for(let value of this.orgdata){
  if(value.newsType == 'food'){
      this.ndata.push(value);
  }
}
console.log("ndata",this.ndata)
this.data=this.ndata;
this.ndata=[];
console.log("ndata after splice",this.ndata);
console.log("data is",this.data);
}
sports(){
  for(let value of this.orgdata){
  if(value.newsType == 'sports'){
      this.ndata.push(value);
  }
}
console.log("ndata",this.ndata)
this.data=this.ndata;
this.ndata=[];
console.log("ndata after splice",this.ndata);
console.log("data is",this.data);
}
bussiness(){
  for(let value of this.orgdata){
    if(value.newsType == 'bussiness'){
      this.ndata.push(value);
  }
}
  console.log("ndata",this.ndata)
  this.data=this.ndata;
  this.ndata=[];
  console.log("ndata after splice",this.ndata);
  console.log("data is",this.data);
}
politics(){
  for(let value of this.orgdata){
  if(value.newsType == 'politics'){
      this.ndata.push(value);
  }
}
console.log("ndata",this.ndata)
this.data=this.ndata;
this.ndata=[];
console.log("ndata after splice",this.ndata);
console.log("data is",this.data);
}
entertainment(){
  for(let value of this.orgdata){
  if(value.newsType == 'entertainment'){
      this.ndata.push(value);
  }
}
console.log("ndata",this.ndata)
this.data=this.ndata;
this.ndata=[];
console.log("ndata after splice",this.ndata);
console.log("data is",this.data);
}

modifyNewsStatus(value:any){
  this._service.modifyNewsStatus(value , this.token).
  subscribe(
    data => {
      this.checkResponse(data);
      console.log(data);
    },
    error => console.log(error)
  )
}

checkResponse(value){
  if(value.verified == true){
    this.showSuccessModal = true;
  }
  else {
    alert("some error occurred")
  }
}



}
