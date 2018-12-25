import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // orgdata=[
    //   {
    //     "title":"1ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"food",
    //     "postedBy":"komal"
    //   },
    //   {
    //     "title":"2ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"bussiness",
    //     "postedBy":"john"
    //   },
    //   {
    //     "title":"3ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"politics",
    //     "postedBy":"komal"
    //   },
    //   {
    //     "title":"4ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"food",
    //     "postedBy":"john"
    //   },
    //   {
    //     "title":"5ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"sports",
    //     "postedBy":"komal"
    //   },
    //   {
    //     "title":"6ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"bussiness",
    //     "postedBy":"john"
    //   },
    //   {
    //     "title":"7ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"politics",
    //     "postedBy":"komal"
    //   },
    //   {
    //     "title":"8ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"sports",
    //     "postedBy":"john"
    //   },
    //   {
    //     "title":"9ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"entertainment",
    //     "postedBy":"komal"
    //   },
    //   {
    //     "title":"10ejfwiorngorenonel",
    //     "description":"wofjprojg opgrd qeijgrwsa fmpor",
    //     "image":"https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg",
    //     "type":"entertainment",
    //     "postedBy":"komal"
    //   }
    // ]

    orgdata:any=[];
    data:any=[];
    ndata:any=[];
    isTarget:any;
  constructor(private _service :CommonService) {
      // this.data=this.orgdata;
      this._service.getNews()
    .subscribe(
      data=> {
        this.checkVerified(data);
        console.log(data);
  },
   err=>console.log(err));
  }

  ngOnInit() {
  }

  checkVerified(data){
    // for(let val of data){
    console.log(data);
      if(data[0].isVerified == true){
        this.data=data;
        console.log(this.data);
        this.orgdata = this.data;
      // }
    }
  }
  all(){
    this.data=this.orgdata;
  }

food(){
  this.isTarget = "t";
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


}
