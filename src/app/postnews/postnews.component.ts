import { Component, OnInit ,ElementRef, Input } from '@angular/core';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {FileUploader, FileSelectDirective } from 'ng2-file-upload';
import {AppserviceService} from '../appservice.service';

const uri="";

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

uploader : FileUploader = new FileUploader({url : uri});

  constructor(private _fileservice : AppserviceService) {
    this.uploader.onCompleteItem = (item : any , response : any , status : any , headers : any) => {
        console.log('ImageUpload:uploaded:', item, status, response);
           this.attachmentList.push(JSON.parse(response)); //gives response in attachment list array
          console.log(this.attachmentList);
          if(this.attachmentList.status == 201){
            console.log("succesfull Response");
              this.postNewsForm.value.imageUrl=this.attachmentList.imageUrl;
          }
        }
}

  ngOnInit() {
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
    if(response.success = 200) {
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
