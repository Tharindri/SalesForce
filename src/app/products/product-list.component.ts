import {Component, OnInit} from '@angular/core';

import { ProductService } from '../services/product.service';
import { IProduct } from '../modules/product';
@Component({

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle= 'Product List';

  errorMessage: string;
  private products: IProduct[];

  constructor(private _productService: ProductService) {
    this._productService.getProducts()
      .subscribe(res => { this.products = res;

        },
        error => this.errorMessage = <any>error);

  }

  ngOnInit(): void {


  }
}
