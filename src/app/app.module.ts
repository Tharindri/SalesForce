import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OutletComponent } from './outlet/outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    OutletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      //{ path: 'product/:Id', component: ProductListComponent },

      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'outlet', component: OutletComponent},
      
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    //RouterModule.forChild([
      //{path: 'products', component: ProductListComponent},
    //])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
