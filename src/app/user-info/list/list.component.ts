import {Component, OnInit} from '@angular/core';
import {FormService} from "../../service/form.service";
import {Router} from "@angular/router";
import {NotificationsService} from "../../service/notifications.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{

  displayedColumns: string[] = [ 'id','firstName', 'lastName', 'email','type'
    ,'password','subjects','sex','phone','do'];

  dataSource: any[]=[];

  constructor(private service: FormService, private router: Router, private notifications:NotificationsService) {}

  ngOnInit() {
    this.loadList();
  }

  loadList(){
    this.service.getAll().subscribe((data) => {
      this.dataSource = data;
    });

    console.log(this.dataSource);
  }
  deleteRecord(id: string) {
    this.service.deleteById(id).subscribe(() => {
      this.loadList();
      this.notifications.showSuccessMessage("Видалено успішно!")
    });
   /* this.service.delete(id).subscribe(() => {
      this.loadList();
    },(error) =>
      this.loadList.showErrorMessage("error"));*/
  }

  updateRecord(id:string){
    this.router.navigate(['userInfo/update',id]);
  }

  userDetails(id: string){
    this.router.navigate(['userInfo/details',id]);
  }

}
