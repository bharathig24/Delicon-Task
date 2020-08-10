import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SampleService } from '../service/sample.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  editForm;
  name = "bharathi";
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sampleService: SampleService,
    private router: Router) { 

    this.editForm = new FormGroup({
      date : new FormControl(this.data.date,[Validators.required]),
      guest : new FormControl(this.data.guest,[Validators.required]),
      time : new FormControl(this.data.time,[Validators.required]),
      fName : new FormControl(this.data.fName,[Validators.required]),
      lName : new FormControl(this.data.lName,[Validators.required]),
      eMail : new FormControl(this.data.eMail,[Validators.required]),
      mobile : new FormControl(this.data.mobile,[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submit(){
    let obj = this.editForm.value;
    obj.id = this.data._id;
    this.sampleService.edit(obj).subscribe(res=>{
      // console.log(res['data']);
      if(res['data']=="true"){
        this.dialogRef.close();
      }
    },err=>{
      console.log(err);
      
    });

  }

  close() {
    this.dialogRef.close();
  }

}
