import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';
import { AllcategoryService } from '../../../../services/allcategory.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
 constructor(
  private service:AllproductsService,
  private categorys:AllcategoryService
  ){}
  ngOnInit(): void {
    this.Products();
    this.Cart();
    this.Order();
    this.Category();
  }
products:any = [];
cart:any = [];
category:any = [];
orders:any = [];
p1:number = 0;
p2:number = 0;
totalProducts:any;
totalorder:any;


Products(){
  this.service.Receiveallproducts().subscribe((data)=>{
    this.products = data;
    this.totalProducts = data.length;
  })
}
Cart(){
 this.service.CartItems().subscribe((data)=>{
  this.cart = data;
 })
}
Order(){
  this.service.getorderlist().subscribe((data)=>{
    this.orders = data;
    this.totalorder = data.length;
  })
}
Category(){
  this.categorys.GetallCategory().subscribe((data)=>{
    this.category = data;
  })
}
}
