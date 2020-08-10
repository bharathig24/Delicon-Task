import { Component, OnInit, Type } from '@angular/core';
import { SampleService } from 'src/app/service/sample.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup/popup.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  arr:any[];

  constructor(private sampleService: SampleService,private matDialog: MatDialog) { 
    this.sampleService.read({eMail:JSON.parse(localStorage.getItem("userData"))[1].eMail}).subscribe(res=>{
      console.log(res);
      this.arr = res['data'];
      // console.log(this.arr);
    },err=>{
      console.log(err);
    });
  }

  editData(data){
    var index = this.arr.findIndex((x) => x._id == data);
    // console.log(this.arr[index]);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.arr[index];
    this.matDialog.open(PopupComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
