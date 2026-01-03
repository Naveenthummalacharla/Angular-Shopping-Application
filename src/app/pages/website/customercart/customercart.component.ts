import { Component, OnInit,Input} from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';
import { CartitemsupdateService } from '../../../../services/cartitemsupdate.service';
import { OrderdataService } from '../../../../services/orderdata.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customercart',
  templateUrl: './customercart.component.html',
  styleUrl: './customercart.component.css',
})
export class CustomercartComponent implements OnInit {
  constructor(
    private productservice: AllproductsService,
    private cartitemupdateservice:CartitemsupdateService,
    private  OrderdataService :  OrderdataService,
    private router: Router
    
  ) {}

  @Input() CartItems: any[] = [];
  @Input() LastnameFromproductlist:string = "";
  ItemTotalprice: any = '';
  activeComponent:string = "";
  total:number = 0;
  instruction:string = "";
  ProductList:any[] = [];
  itemqtyErrorMsg:string = "";
  // qty:string = '';
  // name:string = '';
  // mobileno:any;
  // mail:string = '';
  // village:string = '';
  // dono:string = '';
  // pincode:any;
  // city:string = '';
  // state:string = ''
  // nameError:string = '';
  // numberError:string = '';
  // mailError:string = '';
  // villageError:string = '';
  // donoError:string = '';
  // pincodeError:string = "";
  // cityError:string = "";
  // stateError:string = "";

  ngOnInit(): void {
    this.GetCartItems();
    //  this.resetfrm();
  }

  public GetCartItems() {
    this.productservice.CartItems().subscribe((data) => {
      this.CartItems = data.reverse();
      this.cartitemupdateservice.updateCartItemsCount(this.CartItems.length)
      this.Totalprice();
      this.GetAllproducts();
    });
  }
  // public buyproducts(){
  //  if(!this.formValidation()){
  //   return
  //  }
  //     const details:any = {};
  //   details['name'] = this.name;
  //   details['mobileno'] = this.mobileno;
  //   details['mail'] = this.mail;
  //   details['village'] = this.village;
  //   details['dono'] = this.dono;
  //   details['pincode'] = this.pincode;
  //   details['city'] = this.city;
  //   details['state'] = this.state;
  //   details['status'] = "ordered";
  //   details['time'] = new Date()
  //   details['cartitems'] = this.CartItems;
  //   this.productservice.Orderlist(details).subscribe((data)=>{
  //     Swal.fire({
  //       title: 'Success',
  //       text: 'Order Placed Successfully',
  //       icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
  //       confirmButtonText: 'OK',
  //       cancelButtonText: 'Cancel', // For confirm and cancel buttons
  //       showCancelButton: true, // Show cancel button
  //     })
  //   })
  //   this.router.navigate(['/orders'])
  //   this.resetfrm();
  // }

  // public resetfrm(){
  //   this.name = "";
  //   this.mobileno = "";
  //   this.mail = "";
  //   this.village = "";
  //   this.dono = "";
  //   this.pincode = "";
  //   this.city = "";
  //   this.state = "";
  //   this.nameError = "";
  //   this.numberError = "";
  //   this.mailError = "";
  //   this.villageError = "";
  //   this.donoError = "";
  //   this.pincodeError = "";
  //   this.cityError = "";
  //   this.stateError = "";
  // }
  // public formValidation(): boolean {
  //   const isNameValid:any = this.namevalidation();
  //   const isMobileValid:any = this.numbervalidation();
  //   const isMailValid:any = this.mailvalidation();
  //   const isVillageValid:any = this.villagevalidation();
  //   const isDonoValid:any = this.donovalidation();
  //   const isPincodeValid:any = this.pincodevalidation();
  //   const isCityValid:any = this.cityvalidation();
  //   const isStateValid:any = this.statevalidation();

  //   return (
  //     isNameValid &&
  //     isMobileValid &&
  //     isMailValid &&
  //     isVillageValid &&
  //     isDonoValid &&
  //     isPincodeValid &&
  //     isCityValid &&
  //     isStateValid
  //   );
  // }

  // namevalidation(){
  //   if(!this.name){
  //   this.nameError = 'Name Required';
  //   return false;
  //   }else{
  //     this.nameError = '';
  //     return true;
  //   }
  // }
  // numbervalidation(){
  //   const phoneNumberPattern = /^\+?\d{10,}$/;
  //   if(!this.mobileno){
  //   this.numberError = 'Number Required';
  //   return false
  //   }else if(!phoneNumberPattern.test(this.mobileno)){
  //     this.numberError = "Invalid Phone Number";
  //     return false
  //   }else{
  //     this.numberError = '';
  //     return true
  //   }
  // }
  // mailvalidation(){
  //   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //  if(!this.mail){
  //   this.mailError = 'Mail Required';
  //   return false;
  //  }else if(!emailPattern.test(this.mail)){
  //   this.mailError = 'Invalid Email Format';
  //   return false;
  //  }else{
  //   this.mailError = '';
  //   return true;
  //  }
  // }
  // villagevalidation(){
  //   if(!this.village){
  //   this.villageError = 'Village Required';
  //   return false;
  //   }else{
  //     this.villageError = '';
  //     return true;
  //   }
  // }
  // donovalidation(){
  //   if(!this.dono){
  //    this.donoError = 'Dono Required';
  //    return false;
  //   }else{
  //     this.donoError = '';
  //     return true;
  //   }
  // }
  // pincodevalidation(){
  //   if(!this.pincode){
  //  this.pincodeError = "Pincode Required";
  //  return false;
  //   } else if(this.pincode.length !== 6){
  //     this.pincodeError = 'Pincode must be 6 characters long';
  //     return false
  //   } else {
  //  this.pincodeError = "";
  //  return true
  //   }
  // }
  // cityvalidation(){
  //   if(!this.city){
  //     this.cityError = "City Required";
  //     return false;
  //   }else{
  //     this.cityError = "";
  //     return true
  //   }
  // }
  // statevalidation(){
  //   if(!this.state){
  //     this.stateError = "state Required";
  //     return false
  //   }else{
  //     this.stateError = "";
  //     return true
  //   }
  // }
  public continueshopping(){
      this.router.navigate(['/shop'])
  }
  public GetAllproducts(){
    this.productservice.Receiveallproducts().subscribe((data) => {
      this.ProductList = data;
    });
  }
 
  public remove(data: any) {
    this.productservice.RemoveformCart(data.id).subscribe(() => {
      this.productservice.updateCart();
      Swal.fire({
        title: data.productshortName,
        text: 'Remove from Cart',
        icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel', // For confirm and cancel buttons
        showCancelButton: true, // Show cancel button
      });
        this.GetCartItems();
    });
  }
  public Increaseqty(item: any) {
    item.itemqty += 1;
        const product = this.ProductList.find(prod => prod.id === item.id);
        if (product) {
            if (product.stock === 0) {
                item.itemqtyErrorMsg = "No Stock";
            } else if (product.stock < item.itemqty) {
                item.itemqtyErrorMsg = `Stock is Only ${product.stock}`;
            } else {
                item.itemqtyErrorMsg = "";
            }
   
    }
    this.Updatecarts(item);
}

  public Decreaseqty(item: any) {
    if (item.itemqty > 1) {
      item.itemqty -= 1;
        const product = this.ProductList.find(prod => prod.id === item.id);
        if (product) {
            if (product.stock > item.itemqty) {
              item.itemqtyErrorMsg = "";
           } else {
            item.itemqtyErrorMsg = `Stock is Only ${product.stock}`;
            }
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
  public Totalprice():number {
    if(this.CartItems.length>0){
      for (let item of this.CartItems) {
        this.total += this.calculatePrice(item);
      }
    }else{
      this.total = 0;
    }
    return this.total; 
  }

  public UpdateCart(){  
  
  }
  public placeOrder() {
    const itemExceedsStock = this.CartItems.some((item)=>item.itemqty > item.stock);
    if (itemExceedsStock) {
      // Display popup message
      Swal.fire({
          title: 'Error',
          text: 'One or more items in your cart exceeds the available stock. Please adjust the quantities.',
          icon: 'error',
          confirmButtonText: 'OK'
      });
      return; // Exit function without placing the order
  }
    const orderdata = {
      cartdata: this.CartItems,
      instructions: this.instruction,
      totalprice : this.total
    };
    // this.productservice.Orderlist(orderdata).subscribe((data) => {
    //   Swal.fire({
    //     title: 'Success',
    //     text: 'Order Placed Successfully',
    //     icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
    //     confirmButtonText: 'OK',
    //     cancelButtonText: 'Cancel', // For confirm and cancel buttons
    //     showCancelButton: true, // Show cancel button
    //   });
    // });
    Swal.fire({
          title: 'Success',
          text: 'Order Placed Successfully',
          icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel', // For confirm and cancel buttons
          showCancelButton: true, // Show cancel button
        });
    this.OrderdataService.setorderproductinfo(orderdata);
    this.router.navigate(['/orders']);
  }
}
