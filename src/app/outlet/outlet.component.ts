import { Component, OnInit } from '@angular/core';
import { OutletService } from '../services/outlet.service';
import { Outlet } from '../models/outlet';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {
  pageTitle= 'Outlet List';
  
    errorMessage: string;
    private outlets: Outlet[];
    newOutlet:any={};
    outletForm:boolean=false;
    editOutletForm:boolean=false;
     isNewForm:boolean;
     editedOutlet:any={};
  constructor(private outletService:OutletService) { 
    this.outletService.getOutlets()
    .subscribe(res => { this.outlets = res; },
      error => this.errorMessage = <any>error);
  }



  showEditOutletForm(outlet:Outlet)
  {
  if(!outlet){
    this.outletForm=false;
    return;
  }
  this.editOutletForm=true;
  //this.isNewForm=false;
  this.editedOutlet=outlet;
  
  }
  
  
  
  showAddOutletForm()
  {
    if(this.outlets.length)
    {
      this.newOutlet={};
    }
    this.outletForm=true;
    this.isNewForm=true;
  }
  
  
  
  saveOutlet(outlet:Outlet)
  {
    if(this.isNewForm)
    {
      this.outlets.push(outlet);
  this.outletService.addOutlet(outlet)
      .subscribe(outlet => {
      
    
  });
  
    }
    
    this.outletForm=false;
  }
  
  
  updateOutlet(Id:number,outlet:Outlet){
  
  this.outletService.updateOutlet(Id,this.editedOutlet).subscribe(outlet=>{
  
  });
  this.editOutletForm=false;
  this.editedOutlet={};
  }
  
  removeOutlet(Id:number,outlet:Outlet)
  {
    this.outlets = this.outlets.filter(h => h !== outlet);
  this.outletService.deleteOutlet(Id,outlet).subscribe(outlet=>{
    console.log(outlet);
  });
  }


  cancelEdits()
  {
    this.editedOutlet={};
    this.editOutletForm=false;
  
  }
  
  


  ngOnInit() {
  }

}
