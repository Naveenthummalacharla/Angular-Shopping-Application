import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderdataService } from '../../../../../services/orderdata.service';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent implements OnInit {
  constructor(private orderDetails:OrderdataService, private fb:FormBuilder){}
  cities: any[] | undefined;
   states: any[] | undefined;
    selectedCity: string | undefined;
    selectedState:string | undefined;
    visible: boolean = true;
  @Output() nextClicked:any = new EventEmitter<any>();
  @Input() productItemsData:any[] = [];
  shippingInformaation:any = [];
  shippingname:string = "";
  paymentmethod:string = "Cash on Delivery (COD)";
  showPrepaidorders:boolean = false;
  showCOD:boolean = false;
  billingaddress:string = "";
  pincodeError:string = "";
 mailerror:string = "";
 phoneError:string = "";
  ngOnInit(): void {
    this. GetShippingData();
    this.cities = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
  ]
  this.states = [
    { name: 'Andaman and Nicobar Islands', code: 'AN' },
    { name: 'Andhra Pradesh', code: 'AP' },
    { name: 'Arunachal Pradesh', code: 'AH' },
    { name: 'Assam', code: 'AM' },
    { name: 'Bihar', code: 'B' },
    { name: 'Chandigarh', code: 'CG' },
    { name: 'Chhattisgarh', code: 'C' },
    { name: 'Dadra and Nagar Haveli', code: 'DH' },
    { name: 'Daman and Diu', code: 'DD' },
    { name: 'Delhi', code: 'DH' },
    { name: 'Goa', code: 'GO' },
    { name: 'Gujarath', code: 'GT' },
    { name: 'Haryana', code: 'HR' },
    { name: 'Himachal Pradesh', code: 'HP' },
    { name: 'Jammu and Kashmir', code: 'JK' },
    { name: 'JharKhand', code: 'JD' },
    { name: 'Karnataka', code: 'KK' },
    { name: 'Kerala', code: 'KL' },
    { name: 'Ladakh', code: 'LH' },
    { name: 'Lakshadweep', code: 'LS' },
    { name: 'Madhya Pradesh', code: 'MP' },
    { name: 'Maharashtra', code: 'MT' },
    { name: 'Manipur', code: 'MP' },
    { name: 'Meghalaya', code: 'MY' },
    { name: 'Mizoram', code: 'MM' },
    { name: 'Nagaland', code: 'NL' },
    { name: 'Odisha', code: 'OA' },
    { name: 'Puducherry', code: 'PC' },
    { name: 'Punjab', code: 'PB' },
    { name: 'Rajastan', code: 'RJ' },
    { name: 'Sikkim', code: 'SM' },
    { name: 'Tamil Nadu', code: 'TN' },
    { name: 'Telangana', code: 'TG' },
    { name: 'Tipura', code: 'TP' },
    { name: 'Uttar Pradesh', code: 'UP' },
    { name: 'Uttarakhand', code: 'UK' },
    { name: 'West Bengal', code: 'WB' }
  ]
  }
  

  Changetoinformation(){
    this.visible = false;
    this.nextClicked.emit(1);
   this.orderDetails.setEditData(this.shippingInformaation)
   }
   ChangetoShipping(){
    this.visible = false;
    this.nextClicked.emit(2)
   }

   public infromationfrm = this.fb.group({
    mail:this.fb.control('',Validators['required']),
    updateOffers:this.fb.control(''),
    selectedCity:this.fb.control('',Validators['required']),
    firstname:this.fb.control('',Validators['required']),
    lastname:this.fb.control('',Validators['required']),
    companyname:this.fb.control(''),
    address:this.fb.control('',Validators['required']),
    appartment:this.fb.control(''),
    city:this.fb.control('',Validators['required']),
    selectedState:this.fb.control('',Validators['required']),
    pincode:this.fb.control('',Validators['required']),
    saveinformation:this.fb.control(''),
    phone:this.fb.control('',Validators['required'])
  })
   
   GetShippingData(){
    this.orderDetails.getpayemnt().subscribe((data)=>{
      this.shippingInformaation = data;
      console.log(this.shippingInformaation)
      if(data.shippingmethodvalue === "0"){
        this.shippingname = "Prepaid Orders";
        this.showPrepaidorders = true;
      }else{
        this.shippingname = "Cash on Delivery";
        this.showCOD = true
      }
    })
   }
   mailvalidation(){
    const mailcontrol = this.infromationfrm.get('mail')
    if( mailcontrol &&  mailcontrol.value){
      const mailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!mailpattern.test( mailcontrol.value)){
        this.mailerror = "Invalid Mail Pattern";
        return true
      }else{
        this.mailerror = "";
        return false;
      }
    }else{
      this.mailerror = "";
      return false;
    }
  }
  pincodeValidation(){
    const pincodeControll = this.infromationfrm.get('pincode')
  if(pincodeControll && pincodeControll.value && pincodeControll.value.toString().length !== 6){
    this.pincodeError = "Pincode must be 6 digits"
    return true; //invalid
  }else{
    this.pincodeError = ""
    return false; // valid
  }
  }
  phonevalidation(){
   const phonecontrol = this.infromationfrm.get('phone');
   if(phonecontrol && phonecontrol.value){
    const phonepattern = /^\d{10}$/;
    if(!phonepattern.test(phonecontrol.value)){
     this.phoneError = "PhoneNumber Required";
     return true;
    }else{
      this.phoneError = "";
      return false;
    }
   }else{
    this.phoneError = "";
    return false;
   }
  }
  CompleteOrder(){
    if(this.billingaddress === 'true'){
      const formValue = this.infromationfrm.value
      const merge = {
        ...formValue,
        shippingInformation: this.shippingInformaation
      }
      console.log(merge)
    }else{
      console.log(this.productItemsData)
    }
  }
  returntoshipping(){
    this.visible = false;
    this.nextClicked.emit(2);
  }
}
