import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(private router : Router,
    private sampleService : SampleService
    ) {
      this.loginForm = new FormGroup({
        eMail : new FormControl('',[Validators.required]),
        password : new FormControl('',[Validators.required])
      });
      localStorage.clear();
     }

     login(){
      //  console.log(obj);
      this.sampleService.loginReq(this.loginForm.value).subscribe(res=>{
        // console.log(res);
        if(res['data'] === "true"){
          const userData = [
            {'userName': res['userName']},
            {'eMail':this.loginForm.value.eMail}
          ];  
          localStorage.setItem('userData', JSON.stringify(userData));
          
          this.router.navigate(['/reservation']);
          
        }
      },err=>{
        console.log(err);
      });
      
      // this.router.navigate(['/home']);
    }

  ngOnInit(): void {
  }

}
