import {Component, OnInit} from '@angular/core';
import {FormService} from "../service/form.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  dataSource: any[] = [];
  constructor(private formService:FormService) {
  }

  ngOnInit(){
    this.formService.getAll().subscribe(data => {this.dataSource = data});
    console.log(this.dataSource);
  }

}
