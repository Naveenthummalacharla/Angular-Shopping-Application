import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { OrderdataService } from '../../../../../services/orderdata.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrl: './shipping-form.component.css'
})
export class ShippingFormComponent implements OnInit {
  constructor(private orderDetails:OrderdataService){}
  informationData:any = []
  visible: boolean = true;
  selectedIngredient: string = ""
@Output() nextClicked:any = new EventEmitter<any>()

  ngOnInit(): void {
    this.getinformationdata();
    
  }
  
 public getinformationdata(){
  this.orderDetails.getInformationDetails().subscribe(data=>{
   this.informationData = data;
  })
 }

 Changetoinformation(){
  this.visible = false;
  this.nextClicked.emit(1);
  this.orderDetails.setEditData(this.informationData);
 }
 returntoinformation(){
  this.visible = false;
  this.nextClicked.emit(1);
  this.orderDetails.setEditData(this.informationData);
 }

  public continuepayment(){
    if(this.selectedIngredient){
      const shippingdata = this.informationData;
      shippingdata['shippingmethodvalue'] = this.selectedIngredient;
      this.orderDetails.setpayment(shippingdata)
      this.visible = false;
      // Pass the step value directly to the parent component
      this.nextClicked.emit(3);
    }else{
      Swal.fire({
        title: 'Warning',
        text: 'Select Payment Method',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
    }
   
}
