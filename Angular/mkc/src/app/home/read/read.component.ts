import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/service/sample.service';
import { createInjectable } from '@angular/compiler/src/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  arr:any[];

  constructor(private sampleService : SampleService) { 
    this.sampleService.read({eMail:JSON.parse(localStorage.getItem("userData"))[1].eMail}).subscribe(res=>{
      // console.log(res);
      this.arr = res['data'];
    },err=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
