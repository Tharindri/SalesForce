import { Component,OnInit,Inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { OutletService } from './services/outlet.service';
import { UserService } from './services/user.service';
import { RouteService } from './services/route.service';
import { VanService } from './services/van.service';
import { RouteOutletService } from './services/routeOutlet.service';
import { NotificationService } from './services/notification.service';
import { Notification } from './models/notification';
import { ExpenseService } from './services/expense.service';
import { AuthInterceptorService } from './services/authInterceptor.service';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
//import {routerTransition} from './'
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  //styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  private notifications: Notification[];
  

  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
      this.notificationService.getNotification().subscribe(data=>{
        this.notifications=data;
        console.log(this.notifications) });
  }

  updateStatus(Id:number)
  {
    console.log(Id);
   this.notificationService.updateStatus("Confirmed",Id).subscribe( notification=>
      {
     console.log(notification);
       
    } );


  }

  updateCancel(Id:number)
  {
    console.log(Id);
   this.notificationService.updateStatus("Rejected",Id).subscribe( notification=>
      {
     console.log(notification);
       
    } );
    

  }

}

@Component({
  selector: 'pm-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
  //animations:[routerTransition()]


  ,
  providers:[ ProductService ,RegisterService,LoginService,OutletService,UserService,RouteService,VanService,RouteOutletService,NotificationService,ExpenseService
  ,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}]
  
})
export class AppComponent implements OnInit{
  pageTitle: string = 'SFA-Products';
  notifications: Notification[];
  notificationsLength:number;
constructor(private notificationService:NotificationService,private loginService:LoginService,public dialog:MatDialog
,@Inject(MAT_DIALOG_DATA) public data:any){

}

ngOnInit()
{
  Observable.interval(10000)
  .takeWhile(() => true)
  .subscribe(i => {
    this.notificationService.getNotification().subscribe(data=>{
      this.notifications=data;
      this.notificationsLength=this.notifications.length;
      console.log(this.notifications) });
  });
}

showNotifications(){
  this.dialog.open(NotifyComponent,{
    data:{notifications:this.notifications},
    width:'550px'
    });
}

logOut() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userType');
  localStorage.removeItem('isShowNav');
  localStorage.removeItem('token');
}
}



