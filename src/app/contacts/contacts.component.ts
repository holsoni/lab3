import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  user:any = [];
  id:any = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(id);
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("users")).find(users => users.id == id);
    console.log(this.user);
  }
}
