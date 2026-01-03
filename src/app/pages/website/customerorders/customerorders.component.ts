import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../../../../services/allproducts.service';
import { OrderdataService } from '../../../../services/orderdata.service';
import { MenuItem } from 'primeng/api';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-customerorders',
  templateUrl:'./customerorders.component.html',
  styleUrl: './customerorders.component.css'
})
export class CustomerordersComponent implements OnInit {
  constructor(
    private productservice:AllproductsService,
    private OrderdataService:OrderdataService
    ){}
ngOnInit(): void {
  this.GetorderData();
  this.items = [{ label: 'Cart' }, { label: 'Inforamation' }, { label: 'Shipping' }, { label: 'Payment' }];
  this.events = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg', },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]
this.getOrderItems()
}

items: MenuItem[] | undefined;
productItems:any = {};
home: MenuItem | undefined;
showModal: boolean = false;
OrderData:any = [];
reason:string = '';
reasonError:string = '';
dataToDelete: any;
events: any[] = [];
currentStep:number = 1;

public GetorderData(){
  this.productservice.getorderlist().subscribe((data)=>{
    this.OrderData = data;
  })
} 
openorderCancel(data:any){
  const Modeldiv = document.getElementById('myModal');
  if(Modeldiv != null){
    Modeldiv.style.display = 'block'
  }
  this.showModal = true;
  this.dataToDelete = data;
}
closeorderCancel(){
  const Modeldiv = document.getElementById('myModal');
  if(Modeldiv != null){
    Modeldiv.style.display = 'none'
  }
  this.showModal = false;
}
public submitReason(){
 if(this.validate()){
  if(this.dataToDelete){
   this.productservice.deleteorderlist(this.dataToDelete.id).subscribe((data)=>{
    Swal.fire({
      title: 'Success',
      text: 'Cancelled Order Successfully',
      icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel', // For confirm and cancel buttons
      showCancelButton: true, // Show cancel button
    })
    this.GetorderData();
    this.closeorderCancel();
   })
  }
  this.Resetreason();
 }
}
public Resetreason(){
  this.reason = '';
  this.reasonError = '';
}
validate(){
  if(!this.reason){
   this.reasonError = 'Reason Required';
   return false;
  }else{
    this.reasonError = '';
    return true;
  }
}
////
getOrderItems(){
  this.OrderdataService.getorderproductinfo().pipe(
    first()
  ).subscribe((data)=>{
   this.productItems = data;
   console.log(this.productItems)
  })
}
NextStep(step: number){
  this.currentStep = step;
}

}

