import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../models/notification';
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  private notifications: Notification[];
  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotification().subscribe(data=>{
      this.notifications=data;
    });
    }

  updateStatus(Id:number,status:string)
  {
    
    /*this.notificationService.updateStatus("confirm").subscribe( notification=>
      {
     console.log(notification);
       
    } );*/
  }
}
