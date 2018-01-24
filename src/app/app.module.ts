import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OutletComponent } from './outlet/outlet.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteComponent } from './route/route.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';

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
    RouteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'products', component: ProductListComponent},
      { path: 'routes/:id', component: RouteDetailComponent },
      
      { path: 'routes', component: RouteComponent },

       {path: 'outlet', component: OutletComponent},
       {path: 'users/:id', component: UserDetailComponent},
      {path: 'users', component: UsersComponent},
      
     {path: 'register', component: RegisterComponent},
     {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    RouterModule.forChild([
      {path: 'dashboard', component: DashboardComponent},
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
