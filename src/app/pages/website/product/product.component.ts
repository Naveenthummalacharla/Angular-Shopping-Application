import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';
import { SearchServiceService } from '../../../../services/search-service.service';
import { CarouselComponent } from 'smart-webcomponents-angular/carousel';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent   {
//  constructor(private productservice:AllproductsService,
//   private router:Router,
//   private searchser:SearchServiceService
//   ){}
//  allproducts:any = [];
//  CartItems:any[] = [];
//  searchResults: any = [];
//  filteredproducts:any= [];
  // ngOnInit(): void {
  //   this.GetAllProducts();
  //   this.GetCartItems();
  //   this.searchser.getSerachQuery().subscribe((data)=>{
  //     this.searchResults = data;
  //     this.filterProducts();
  //   })
  // }

// public GetAllProducts(){
//   this.productservice.Receiveallproducts().subscribe((data)=>{
//     this.allproducts = data;
//     this.filterProducts();
//   })
// }
// filterProducts() {
//   if(this.searchResults.trim() === "") {
//     this.filteredproducts = this.allproducts;
//   } else {
//     this.filteredproducts = this.allproducts.filter((product: any) =>
//       product.productName.toLowerCase().includes(this.searchResults.toLowerCase())
//     );
//   }
// }
// public addCart(data: any) {
//   // Check if the product already exists in the cart
//   const productExists = this.checkIfProductExistsInCart(data);
//   if (productExists) {
//     console.log(productExists)
//     // Show error message to the user
//     Swal.fire({
//       title: 'Error',
//       text: 'Product already exists in the cart',
//       icon: 'error',
//       confirmButtonText: 'OK'
//     });
//   } else {
//     data.carting = 'ok';
//     // If the product does not exist in the cart, add it
//     this.productservice.AddToCart(data).subscribe(() => {
//       this.productservice.updateCart();
//       this.GetCartItems()
//       // Show success message to the user
//       Swal.fire({
//         title: "Success",
//         text: 'Added to cart successfully',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });
//     });
//   }
// }
// private checkIfProductExistsInCart(product: any) {
//   const existingProduct = this.CartItems.find(item => item.id === product.id);
//   console.log(existingProduct)
//   return existingProduct;
// }
// public GetCartItems(){
//   this.productservice.CartItems().subscribe((data)=>{
//     this.CartItems = data;
//   })
// }
// truncateProductName(productName: string, maxLength: number): string {
//   if (productName.length > maxLength) {
//     return productName.substring(0, maxLength) + '...'; // Truncate the string and add ellipsis
//   } else {
//     return productName; // Return the original string if it's within the limit
//   }
// }

// public watch(data:any){
//  this.productservice.AddWatchList(data).subscribe((data)=>{
//    this.productservice.updateWatch();
//    Swal.fire({
//     title: "Success",
//     text: 'Add To Watch',
//     icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
//     confirmButtonText: 'OK',
//     cancelButtonText: 'Cancel', // For confirm and cancel buttons
//     showCancelButton: true, // Show cancel button
//   })
//  })
// }
}
