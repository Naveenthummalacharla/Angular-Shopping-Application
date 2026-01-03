import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  constructor(private service:AllproductsService){}
ngOnInit(): void {
 this.getData(); 
}

Orders:any = [];

getData(){
  this.service.getorderlist().subscribe((data)=>{
    this.Orders = data;
  })
}
}
