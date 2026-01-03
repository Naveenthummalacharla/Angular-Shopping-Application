import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderdataService {

  constructor() { }

  private OrderDetails  = new BehaviorSubject<any>([]);
  private EditOrderdata = new BehaviorSubject<any>([]);
  private ShippingInformation = new BehaviorSubject<any>([]);
  private productsinformation = new BehaviorSubject<any>([]);
  setInformationDetails(data:any){
    this.OrderDetails.next(data)
  }
  getInformationDetails():Observable<any>{
    return this.OrderDetails.asObservable();
  }

  setEditData(data:any){
    this.EditOrderdata.next(data)
  }
  getEditData(){
    return this.EditOrderdata.asObservable();
  }
 setpayment(data:any){
  this.ShippingInformation.next(data)
 }
 getpayemnt(){
  return this.ShippingInformation.asObservable();
 }

 setorderproductinfo(data:any){
  this.productsinformation.next(data)
 }
 getorderproductinfo(){
  return this.productsinformation.asObservable();
 }
}
