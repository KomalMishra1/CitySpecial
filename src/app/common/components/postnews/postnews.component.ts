import { Component, OnInit ,ElementRef, Input } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {FileUploader, FileSelectDirective } from 'ng2-file-upload';
import {CommonService} from '../../common.service';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';

const uri="https://cityspecial.herokuapp.com/api/reporter/uploadImage";


@Component({
  selector: 'app-postnews',
  templateUrl: './postnews.component.html',
  styleUrls: ['./postnews.component.scss']
})
export class PostnewsComponent implements OnInit {

  postNewsForm : FormGroup=new FormGroup({
    title: new FormControl(null ,  Validators.required),
     description: new FormControl(null , Validators.required),
     longDescription:new FormControl(null , Validators.required),
     imageUrl:new FormControl(null , Validators.required),
     newsType:new FormControl(null , Validators.required)
   });

attachmentList : any = [];
showMessage : boolean =false;
descriptionArray:any=[];
showSuccesModal:boolean=false;
token:any;
showUrl:boolean = false;

uploader : FileUploader = new FileUploader({url : uri , itemAlias : 'newsImage' , authToken : this.token});

  constructor(private _fileservice : CommonService) {
    if(sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++){
          let key = sessionStorage.key(i);
          let value = sessionStorage.getItem(key);
          this.getToken(value);
          console.log(key, value);
          console.log("teoken" , this.token);
          }
        }
    this.uploader.authToken = this.token;
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item : any , response : any , status : any , headers : any) => {
      console.log(this.uploader);
        console.log('ImageUpload:uploaded:', item, status, response);
           this.attachmentList.push(JSON.parse(response)); //gives response in attachment list array
          console.log(this.attachmentList);
          if(this.attachmentList[0].status == 201 ||  this.attachmentList[0].status == 200){
            console.log("succesfull Response");
              this.postNewsForm.value.imageUrl=this.attachmentList[0].imageUrl;
              console.log("image url " , this.postNewsForm.value.imageUrl);
              this.showUrl=true;
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

  checkNoOfWords(event){
        var wordCount = event.target.value.trim().replace(RegExp, ' ').split(' ').length;
        console.log(wordCount);
        if(wordCount > 60) {
          alert("u have exceeded 60 words");
        }
  }
  checkNoOfWordsInTitle(event){
    var wordCount = event.target.value.trim().replace(RegExp, ' ').split(' ').length;
    console.log(wordCount);
    if(wordCount > 10) {
      alert("u have exceeded 10 words");
  }
}

  submit(){
      console.log(this.postNewsForm.value);
      this._fileservice.sendNews(this.postNewsForm.value).
      subscribe(
        data => {
          console.log(data);
          this.checkSuccess(data);
        },
        err => console.log(err));
  }
  checkSuccess(response){
    if(response.success == 200 || response.success == 201) {
      this.showSuccesModal = true;
      console.log(this.showSuccesModal);
    }
  }
  //
  // download(index) {
  // var filename = this.attachmentList[index].uploadname;
  // this._fileservice.downloadFile(filename)
  // .subscribe(
  //   data =>console.log(data),
  //   error =>console.error(error)
  // );

  //
  // upload() {
  // //locate the file element meant for the file upload.
  //     let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  // //get the total amount of files attached to the file input.
  //     let fileCount: number = inputEl.files.length;
  // //create a new fromdata instance
  //     let formData = new FormData();
  // //check if the filecount is greater than zero, to be sure a file was selected.
  //     if (fileCount > 0) { // a file was selected
  //         //append the key name 'photo' with the first file in the element
  //             formData.append('photo', inputEl.files.item(0));
  //         //call the angular http method
  //
  //       }
  //    }
 //
 //     onChange(event) {
 //   var files = event.srcElement.files;
 //   console.log(event);
 //   console.log('files' , files.length);
 //   this.attachmentList.push(files);
 //   console.log(this.attachmentList);
 // }
 // onFileChange(event) {
 //   const reader = new FileReader();
 //
 //   if(event.target.files && event.target.files.length) {
 //     const [file] = event.target.files;
 //     reader.readAsDataURL(file);
 //     console.log(file);
 //     reader.onload = () => {
 //       this.postNewsForm.patchValue({
 //         file: reader.result
 //      });
 //
 //       // need to run CD since file load runs outside of zone
 //       this.cd.markForCheck();
 //     };
 //   }
 // }




}
