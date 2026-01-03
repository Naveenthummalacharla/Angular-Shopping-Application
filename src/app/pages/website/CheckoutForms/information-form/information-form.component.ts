import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Output,EventEmitter } from '@angular/core';
import { OrderdataService } from '../../../../../services/orderdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrl: './information-form.component.css',
})
export class InformationFormComponent implements OnInit {

constructor(private fb:FormBuilder, 
  private router:Router,
  private OrderDetails:OrderdataService
  ){}
cities: any[] | undefined;
states: any[] | undefined;
    selectedCity: string | undefined;
    selectedState:string | undefined;
pincodeError:string = "";
mailerror:string = "";
phoneError:string = "";
visible: boolean = true;
@Output() nextClicked:any = new EventEmitter<any>()
  ngOnInit(): void {
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
  this.Editdata()
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

continueShipping(){
if(this.infromationfrm.valid){
  this.OrderDetails.setInformationDetails(this.infromationfrm.value);
  this.visible = false;
this.nextClicked.emit(2);
}else{
  Object.keys(this.infromationfrm.controls).forEach(field=>{
    const control = this.infromationfrm.get(field)
    control?.markAsTouched({onlySelf:true})
  })
}
}

Editdata() {
  this.OrderDetails.getEditData().subscribe(
    (data) => {
      this.infromationfrm.patchValue(data);
    },
    (error) => {
      console.error('Error retrieving edit order data:', error);
    }
  );
}
mailvalidation(){
  const mailcontrol = this.infromationfrm.get('mail')
  if( mailcontrol &&  mailcontrol.value){
    const mailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!mailpattern.test( mailcontrol.value)){
      this.mailerror = "Invalid Mail Pattern";
      return true;
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
}
