import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/product';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle= 'Product List';

  errorMessage: string;
  products: IProduct[];
  productForm:boolean=false;
 editProductForm:boolean=false;
  isNewForm:boolean;
  newProduct:any={};
  editedProduct:any={};
_listFilter:string;
isShow:boolean=false;

get listFilter():string{
return this._listFilter;
}

set listFilter(value:string){
  this._listFilter=value;
  this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
}
filteredProducts:IProduct[];


  constructor(private _productService: ProductService) {}
    
    
      
  

  performFilter(filterBy:string):IProduct[]{
    
      filterBy=filterBy.toLocaleLowerCase();
      return this.products.filter((product:IProduct)=>
    product.Name.toLocaleLowerCase().indexOf(filterBy)!==-1);
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
console.log(product);
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

removeProduct(Id:number)
{
  
this._productService.deleteProduct(Id).subscribe(product=>{
  this.products = this.products.filter(h => h !== product);
  console.log(product);
});
}
cancelEdits()
{
  this.editedProduct={};
  this.editProductForm=false;

}


  ngOnInit(): void {

    this._productService.getProducts()
    .subscribe(res => { this.products = res;
      this.filteredProducts = this.products;
    },
      error => this.errorMessage = <any>error);

if(localStorage.getItem('userType')==='Sales' || localStorage.getItem('userType')==='Admin' ){
  this.isShow=true;
}      
  }
}
