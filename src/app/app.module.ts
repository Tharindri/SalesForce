import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent,NotifyComponent } from './app.component';
import { HttpModule } from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PushNotificationModule } from 'ng-push-notification';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NotificationService } from './services/notification.service';

import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OutletComponent } from './outlet/outlet.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteComponent, RootMapComponent } from './route/route.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { UserRouteComponent } from './user-route/user-route.component';
import { VanComponent } from './van/van.component';
import { AuthGuard,AdminHrGuard,AdminGuard,FinanceGuard} from './guard/auth.guard';
import { ExpensesComponent } from './expenses/expenses.component';
//import { NotifyComponent } from './notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    OutletComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    RouteComponent,
    RootMapComponent,
    RouteDetailComponent,
    UserRouteComponent,
    VanComponent,
    NotifyComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAffo2SGGslIiYkLH9y_gjGmnMkrL0YoxM'
    }),
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent,canActivate:[AuthGuard]},
      {path: 'products', component: ProductListComponent},
      { path: 'routes/:id', component: RouteDetailComponent },
      
      { path: 'routes', component: RouteComponent ,
      children:[
        { path: 'routes/user-route', component: UserRouteComponent },
        { path: 'routes/van', component: VanComponent }
      ]},

        {path: 'outlet', component: OutletComponent},
        {path: 'users/:id', component: UserDetailComponent},
        {path: 'users', component: UsersComponent, canActivate:[AdminHrGuard]},
        {path: 'expenses', component: ExpensesComponent,canActivate:[FinanceGuard]},
        {path: 'app', component: NotifyComponent ,canActivate:[AdminHrGuard]},
        {path: 'register', component: RegisterComponent,canActivate:[AdminGuard]},
        {path: 'login', component: LoginComponent},
        {path: '', redirectTo: 'login', pathMatch: 'full'},
        {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ])
  ],
    
  
  providers: [ NotificationService,
               {provide:MAT_DIALOG_DATA,useValue:{}},
               {provide:MatDialogRef,useValue:{}},
               AuthGuard,
               AdminHrGuard,
               AdminGuard,
               FinanceGuard
             ],
  entryComponents:[ NotifyComponent, RootMapComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
