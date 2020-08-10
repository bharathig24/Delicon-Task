import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  
  reserveForm;
  value = "none";

  constructor(private sampleService : SampleService) {
    this.reserveForm = new FormGroup({
      date : new FormControl('',[Validators.required]),
      guest : new FormControl('',[Validators.required]),
      time : new FormControl('',[Validators.required]),
      fName : new FormControl('',[Validators.required]),
      lName : new FormControl('',[Validators.required]),
      eMail : new FormControl('',[Validators.required]),
      mobile : new FormControl('',[Validators.required])
    });
  }

  book(){
    let obj = this.reserveForm.value;
       obj.bEmail= JSON.parse(localStorage.getItem("userData"))[1].eMail;
    this.sampleService.book(obj).subscribe(res=>{
      // console.log(res);
      if(res['data'] === "true"){
        this.reserveForm.reset();
        this.value = "block";
      }
    },err=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
