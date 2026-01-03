import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';
import { CartitemsupdateService } from '../../../../services/cartitemsupdate.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent implements OnInit {
  constructor(
    private productservice: AllproductsService,
    private cartitemupdateservice:CartitemsupdateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryid = +params['categoryid'];
      const urlsigment = this.router.url.split('/');
      this.activecomponent = urlsigment[urlsigment.length - 1];
      this.Products();
      this.GetCartItems();
      this.cartitemupdateservice.cartItemsChanged.subscribe(count => {
        // Show/hide the dialog based on cart items count
        if(count<=0){
          this.visible = false;
        }
      });
    });
  }
  visible: boolean = false;
  categoryid: any;
  filterProducts: any = [];
  productsList: any = [];
  filterdata: any = {};
  CartItems: any;
  activecomponent: string = '';
  originalImageUrl: string = '';

  
  public Products() {
    this.productservice.Receiveallproducts().subscribe((data) => {
      this.productsList = data;
      if (this.categoryid) {
        this.filterProducts = data.filter(
          (product: any) => product.categoryId === this.categoryid
        );
      } else {
        this.filterProducts = data;
      }
    });
  }
  public filterlist(e: any) {
    this.filterdata = e;
  }
  public addToCart(data: any) {
      // Check if the product already exists in the cart
      const productExists = this.checkIfProductExistsInCart(data);
    if (productExists) {
      console.log(productExists);
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
        this.productservice.updateCart();
        this.GetCartItems();
        this.visible = true;
      });
    }
  }
  private checkIfProductExistsInCart(product: any) {
    const existingProduct = this.CartItems.find(
      (item: any) => item.id === product.id
    );
    return existingProduct;
  }
  public GetCartItems() {
    this.productservice.CartItems().subscribe((data) => {
      this.CartItems = data.reverse();
 
    });
  }
    close(){
      this.visible = false;
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
}
