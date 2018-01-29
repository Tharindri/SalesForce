import { Component, OnInit } from '@angular/core';
import { VanService } from '../services/van.service';
import { Van } from '../models/van';
@Component({
  selector: 'app-van',
  templateUrl: './van.component.html',
  styleUrls: ['./van.component.css']
})
export class VanComponent implements OnInit {
  errorMessage: string;
  
vans:Van[];

editedVan:any={};
vanForm:boolean=false;
editVanForm:boolean=false;
newVan:any={};
isNewForm:boolean;
  constructor(private vanService:VanService) { }

  ngOnInit() {
    this.vanService.getVans()
    .subscribe(res => { this.vans = res;
      
    },
      error => this.errorMessage = <any>error);
  }
  showAddVanForm()
  {
    if(this.vans.length)
    {
      this.newVan={};
    }
    this.vanForm=true;
    this.isNewForm=true;
  }
  showEditVanForm(van:Van)
  {
  if(!van){
    this.vanForm=false;
    return;
  }
  this.editVanForm=true;
  //this.isNewForm=false;
  this.editedVan=van;
  
  }
  
  
  saveVan(van:Van)
  {
    if(this.isNewForm)
    {
      this.vans.push(van);
  this.vanService.addVan(van)
      .subscribe(route => {
      
    
  });
  
    }
    
    this.vanForm=false;
  }
  

}
