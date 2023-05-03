import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:any[] = [];

  ngOnInit(){
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
  }
}
