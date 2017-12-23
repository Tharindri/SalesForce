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
  constructor(private outletService:OutletService) { 
    this.outletService.getOutlets()
    .subscribe(res => { this.outlets = res; },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  }

}
