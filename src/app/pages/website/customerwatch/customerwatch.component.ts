import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customerwatch',
  templateUrl: './customerwatch.component.html',
  styleUrl: './customerwatch.component.css'
})
export class CustomerwatchComponent implements OnInit {
constructor(private productservice:AllproductsService){}
watchItems:any = [];
  ngOnInit(): void {
    this.getwatchlistdata();
  }

public getwatchlistdata(){
  this.productservice.WatchList().subscribe((data)=>{
    this.watchItems = data;
  })
}
public deletelist(product:any){
 this.productservice.Deletewatchlist(product.id).subscribe((data)=>{
  Swal.fire({
    title: 'Success',
    text: 'Product Removed From WishList',
    icon: 'success',
    confirmButtonText: 'OK'
  });
    this.getwatchlistdata();
 })
}
}
