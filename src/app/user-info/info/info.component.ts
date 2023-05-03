import {Component, OnInit} from '@angular/core';
import {FormService} from "../../service/form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationsService} from "../../service/notifications.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  id:any;
  profile:any;

  constructor(private service:FormService, private route:ActivatedRoute,private router:Router,
              private notifications:NotificationsService) {
  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id)
      .subscribe(data => {
        this.profile = data;
      }, error => console.log(error));
/*    this.notifications.showInfoMessage("This is info for user"+ this.id);*/
  }

  deleteRecord(id: string) {
    this.service.deleteById(id).subscribe(() => {
      this.router.navigate(['/userInfo/list']);

    });
  }
}
