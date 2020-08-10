import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
user;
  constructor() { 
    this.user = JSON.parse(localStorage.getItem("userData"))[0].userName;
  }

  ngOnInit(): void {
  }

}
