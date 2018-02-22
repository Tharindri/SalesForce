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
     isShow:boolean=false;
     _listFilter:string;
     get listFilter():string{
      return this._listFilter;
      }
      
      set listFilter(value:string){
        this._listFilter=value;
        this.filteredOutlets=this.listFilter?this.performFilter(this.listFilter):this.outlets;
      }
      filteredOutlets:Outlet[];
         
  constructor(private outletService:OutletService) { 
    // this.outletService.getOutlets()
    // .subscribe(res => { this.outlets = res; },
    //   error => this.errorMessage = <any>error);
  }
  performFilter(filterBy:string):Outlet[]{
    
      filterBy=filterBy.toLocaleLowerCase();
      return this.outlets.filter((outlet:Outlet)=>
    outlet.Name.toLocaleLowerCase().indexOf(filterBy)!==-1);
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
  
  
  updateOutlet(outlet:Outlet){
  
  this.outletService.updateOutlet(this.editedOutlet).subscribe(outlet=>{
  
  });
  this.editOutletForm=false;
  this.editedOutlet={};
  }
  
  removeOutlet(Id:number)
  {
    //this.outlets = this.outlets.filter(h => h !== outlet);
  this.outletService.deleteOutlet(Id).subscribe(outlet=>{
    this.outlets = this.outlets.filter(h => h !== outlet);
    console.log(outlet);
  });
  }


  cancelEdits()
  {
    this.editedOutlet={};
    this.editOutletForm=false;
  
  }
  
  


  ngOnInit() {
    this.outletService.getOutlets()
    .subscribe(res => { this.outlets = res;
      this.filteredOutlets = this.outlets;
    },
      error => this.errorMessage = <any>error);

    if(localStorage.getItem('userType')==='Sales' || localStorage.getItem('userType')==='Admin' ){
      this.isShow=true;

  }

}
}