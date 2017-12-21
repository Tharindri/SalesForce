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
 editProductForm:boolean=false;
  isNewForm:boolean;
  newProduct:any={};
  editedProduct:any={};

  constructor(private _productService: ProductService) {
    this._productService.getProducts()
      .subscribe(res => { this.products = res; },
        error => this.errorMessage = <any>error);
      
  }


 


  showEditProductForm(product:IProduct)
{
if(!product){
  this.productForm=false;
  return;
}
this.editProductForm=true;
//this.isNewForm=false;
this.editedProduct=product;

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
    this.products.push(product);
this._productService.addProduct(product)
    .subscribe(product => {
    
  
});

  }
  
  this.productForm=false;
}


updateProduct(product:IProduct){

this._productService.updateProduct(this.editedProduct).subscribe(product=>{

});
this.editProductForm=false;
this.editedProduct={};
}

cancelEdits()
{
  this.editedProduct={};
  this.editProductForm=false;

}


  ngOnInit(): void {


  }
}
