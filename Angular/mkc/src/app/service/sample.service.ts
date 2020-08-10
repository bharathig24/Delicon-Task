import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http : HttpClient) { }

  registerReq(data){
    return this.http.post('http://localhost:3000/register',data);
  }

  loginReq(data){
    // console.log(data);
    
    return this.http.post('http://localhost:3000/login', data);
  }

  book(data){
    return this.http.post('http://localhost:3000/book', data);
  }

  read(data){
    return this.http.post('http://localhost:3000/read',data);
  }

  edit(data){
    return this.http.post('http://localhost:3000/edit',data);
  }

  delete(data){
    return this.http.post('http://localhost:3000/delete',data);
  }
}
