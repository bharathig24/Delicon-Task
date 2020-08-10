import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/service/sample.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  arr:any[];

  constructor(private sampleService: SampleService) { 
    this.sampleService.read({eMail:JSON.parse(localStorage.getItem("userData"))[1].eMail}).subscribe(res=>{
      // console.log(res);
      this.arr = res['data'];
      // console.log(this.arr);
    },err=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  deleteData(id){
    this.sampleService.delete(id).subscribe(res=>{
      // console.log(res);
      if(res['data']=="true"){
        // console.log("deleted");
        window.location.reload();
      }
    },err=>{
      console.log(err);
    })
  }

}
