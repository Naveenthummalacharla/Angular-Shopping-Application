import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {

  activecategoryId:number = 0;
   constructor(
    private activeroute:ActivatedRoute
   ){
    this.activeroute.params.subscribe((resp:any)=>{
       this.activecategoryId = resp
    })
   }

}
