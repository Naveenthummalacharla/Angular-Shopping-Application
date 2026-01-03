import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';
import { ActivatedRoute } from '@angular/router';
import { OrderdataService } from '../../../../services/orderdata.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-view-product',
  templateUrl: './customer-view-product.component.html',
  styleUrl: './customer-view-product.component.css'
})
export class CustomerViewProductComponent implements OnInit {
  constructor(
    private productservice:AllproductsService,
    private router:ActivatedRoute,
    private OrderdataService :OrderdataService ,
    private spinner: NgxSpinnerService,
    private route:Router
  ){ }
ngOnInit(): void {
  this.close();
  this.router.params.subscribe(params => {
  const id = params['id']; // Access the 'id' parameter from params
  this.Getproductdata(id); // Call Getproductdata function after getting the id
  this.GetCartItems();
});
 const urlsegment = this.route.url.split('/');
  this.activeComponent = urlsegment[urlsegment.length-1];
}

userId:any
opendetails:boolean = false;
opencontactnumber:boolean = false;
shippingpolicy:boolean = false;
reviews:boolean = false;
showModal: boolean = false;
cartbuttondisable:boolean = true;
ProductData:any = [];
FilterProductData:any = [];
CartData :any = [];
CartItems:any = [];
itemqtyErrorMsg:string = "";

qty:string = '';
activeComponent:any = "";
public hoveredImageUrl: string | null = null;

public ChangeView(viewname:string){
  this.hoveredImageUrl = viewname;
}
public open(){
 this.opendetails = true;
}
public close(){
  this.opendetails = false;
}
public openContactNumber(){
  this.opencontactnumber = true;
}
public closeContactNumber(){
  this.opencontactnumber = false;
}
public openShippingPolicy(){
  this.shippingpolicy = true;
}
public closeShippingPolicy(){
  this.shippingpolicy = false
}
public openReviews(){
 this.reviews = true;
}
public closeReviews(){
 this.reviews = false;
}
public Getproductdata(id:number){
  this.productservice.Receivedatabyid(id).subscribe((data)=>{
    this.ProductData = [data];
   this.GetAllproducts();
   if (this.ProductData[0].stock === 0) {
    this.itemqtyErrorMsg = "No Stock";
  }
  })
}

public GetAllproducts(){
  this.productservice.Receiveallproducts().subscribe((data) => {
    this.FilterProductData = data;
    // const categoryIdToFilter = this.ProductData[0].categoryId; // Assuming ProductData is available in your component
    // this.FilterProductData = data.filter((product: any) => {
    //   return product.categoryId === categoryIdToFilter;
    // });
  });
}
// public Backtoproduct(){
//   if(this.activeComponent == 'wishlist'){
//     this.route.navigate(['/watch'])
//   }else if(this.activeComponent == 'cart'){
//     this.route.navigate(['/cart'])
//   }else if(this.activeComponent == 'Adminproduct') {
//     this.route.navigate(['/products'])
//   }else if(this.activeComponent == 'adminorders'){
//     this.route.navigate(['/order'])
//   }else{
//     this.route.navigate(['/shop'])
//   }
// }
public GetCartItems() {
  this.productservice.CartItems().subscribe((data) => {
    this.CartItems = data.reverse();

  });
}
public addToCart(data: any) {
  // Check if the product already exists in the cart
  const productExists = this.checkIfProductExistsInCart(data);
  if (productExists) {
    // Show error message to the user
    Swal.fire({
      title: 'Error',
      text: 'Product already exists in the cart',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  } else {
    // If the product does not exist in the cart, add it
    data.carting = "ok"
    data.itemqtyErrorMsg = "";
    this.productservice.AddToCart(data).subscribe(() => {
      Swal.fire({
        title: data.productName,
        text: 'Product Added in cart',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      this.productservice.updateCart();
      this.GetCartItems();
      this.route.navigate(['/cart'])
    });
  }
}
private checkIfProductExistsInCart(product: any) {
  const existingProduct = this.CartItems.find(
    (item: any) => item.id === product.id,
  );
  return existingProduct;
}
public Buynow(data:any){
  if(this.ProductData[0].stock === 0){
    Swal.fire({
      title: data.productName,
      text: `Out of Stock `,
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  }else if(this.ProductData[0].stock < data.itemqty){
  Swal.fire({
    title: data.productName,
    text: `Only ${this.ProductData[0].stock} Item Avaliable `,
    icon: 'warning',
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel', 
    showCancelButton: true, 
  });
}else{
  this.OrderdataService.setorderproductinfo(data);
  Swal.fire({
        title: data.productName,
        text: 'Successfully PLaced Order',
        icon: 'success',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel', 
        showCancelButton: true, 
      });
  // this.productservice.Orderlist(data).subscribe((data)=>{
  //   Swal.fire({
  //     title: data.productName,
  //     text: 'Successfully PLaced Order',
  //     icon: 'success',
  //     confirmButtonText: 'OK',
  //     cancelButtonText: 'Cancel', 
  //     showCancelButton: true, 
  //   });
  // })
  this.route.navigate(['/orders'])
}
}
public Increaseqty(item: any) {
  const product = 
  item.itemqty += 1;
  if (this.ProductData[0].stock === 0) {
    this.itemqtyErrorMsg = "No Stock";
  } else if (this.ProductData[0].stock < item.itemqty) {
    this.itemqtyErrorMsg = `Stock is Only ${this.ProductData[0].stock}`;
  } else {
    this.itemqtyErrorMsg = "";
  }
  this.Updatecarts(item);
}
  public Decreaseqty(item: any) {
    if (item.itemqty > 1) {
      item.itemqty -= 1;
      if(this,this.ProductData[0].stock < item.itemqty){
        this.itemqtyErrorMsg = `Stock is Only ${this.ProductData[0].stock}`;
      }else{
        this.itemqtyErrorMsg = "";
      }
      this.Updatecarts(item);
    }
  }
  public Updatecarts(item: any) {
    this.productservice.Updatecart(item).subscribe(
      (data) => {
        console.log('Item updated successfully:', data);
      },
      (error) => {
        console.error('Error updating item:', error);
        // Handle error here, maybe show a message to the user
      }
    );
  }
  public calculatePrice(item: any): number {
    return  item.givingPrice * item.itemqty;
  }
  public ChangeImage(product:any, isHover:boolean){
    if (isHover) {
      // Store the original image URL if not already stored
      if (!product.originalFirstproductImageUrl) {
          product.originalFirstproductImageUrl = product.firstproductImageUrl;
      }
      // Update the image URL to the hover image URL
      product.firstproductImageUrl = product.secondproductImageUrl;
  } else {
      // Restore the original image URL
      product.firstproductImageUrl = product.originalFirstproductImageUrl;
  }
  }
  private initializePage() {
    this.GetCartItems()
  }
 public navigateToProductView(productId: number) {
  this.spinner.show();
     setTimeout(()=>{
      this.route.navigate(['/viewproduct/', productId, 'product']);
      this.itemqtyErrorMsg = "";
      window.scrollTo(0, 0);
      this.spinner.hide();
      this.initializePage();
     },1000)
  }   
}

