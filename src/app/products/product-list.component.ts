import {Component, OnInit} from '@angular/core';

import { ProductService } from '../services/product.service';
import { IProduct } from '../models/product';
@Component({

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle= 'Product List';

  errorMessage: string;
  private products: IProduct[];
  productForm:boolean=false;
  isNewForm:boolean;
  newProduct:any={};

  constructor(private _productService: ProductService) {
    this._productService.getProducts()
      .subscribe(res => { this.products = res;

        
        },
        error => this.errorMessage = <any>error);
    
  }
  showEditProductForm(product:IProduct)
{
if(!product){
  this.productForm=false;
  return;
}
this.productForm=true;
this.isNewForm=false;
this.newProduct=product;

}
showAddProductForm()
{
  if(this.products.length)
  {
    this.newProduct={};
  }
  this.productForm=true;
  this.isNewForm=true;
}
saveProduct(product:IProduct)
{
  if(this.isNewForm)
  {
this._productService.addProduct(product);
  }
  else 
  {

  }
  this.productForm=false;
}
  ngOnInit(): void {


  }
}
