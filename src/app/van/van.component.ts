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
  constructor(private vanService:VanService) { }

  ngOnInit() {
    this.vanService.getVans()
    .subscribe(res => { this.vans = res;
      
    },
      error => this.errorMessage = <any>error);
  }

}
