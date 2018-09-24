import { Component,ViewChild } from '@angular/core';
import { RecordService } from './Services/record.service';
import {NgForm} from '@angular/forms';
//import { BsModalComponent } from 'ng2-bs3-modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //@ViewChild('modal') modal: BsModalComponent;
 
  title1 = 'angularNode';
  data;
  postData;
  deleteUrl;
  addUrl;
  Id; 
  status;
  title;
  formFlag=false;
  addFlag;
  editFlag;
  buttonDisabled;
  StatusValue=["Pending","Done"]
  url='http://localhost:3000/Tasks';
  addEditRecord(action){
    if(action=='add'){
       this.postData={
      "Id":this.Id,
      "Status":this.status,
      "Title":this.title
    }
      this.addUrl="http://localhost:3000/Tasks/addRecord";
    this.recordService.addRecord(this.addUrl,this.postData)
    .subscribe(()=>this.getAllRecord());
  }else{
     this.postData={
      "Status":this.status,
      "Title":this.title
    }
      this.addUrl="http://localhost:3000/Tasks/updateRecord/" + this.Id;
    this.recordService.updateRecord(this.addUrl,this.postData)
    .subscribe(()=>this.getAllRecord());
    }
     this.Id='',
     this.status='',
     this.title=''
     this.buttonDisabled=false;
     this.formFlag=false;
  }
  addRecord(){
    this.formFlag=true;
    this.buttonDisabled=true;
    this.addFlag=true;
    this.editFlag=false;
  }

  cancel(){
   
    this.formFlag=false;
     this.buttonDisabled=false;
    this.addFlag=false;
    this.editFlag=false;
    this.Id='',
     this.status='',
     this.title=''
  }
  editRecord(record){
     this.formFlag=true;
      this.buttonDisabled=true;
     this.addFlag=false;
     this.editFlag=true;
     this.Id=record.Id,
     this.status=record.Status,
     this.title=record.Title
  }
  deleteRecord(id){
    this.postData={
      "Id":id
    }
    this.deleteUrl='http://localhost:3000/Tasks/deleteRecord'
   // this.recordService.deleteRecord(this.deleteUrl,this.postData);
    this.recordService.deleteRecord(this.deleteUrl,this.postData)
       .subscribe(() => this.getAllRecord());
  }
  getAllRecord(){
    this.recordService.getAllRecord(this.url).subscribe((data)=>{
      this.data =data;
    });
  }

  constructor(private recordService:RecordService) { }
 ngOnInit() {
    this.getAllRecord();
  }
}
