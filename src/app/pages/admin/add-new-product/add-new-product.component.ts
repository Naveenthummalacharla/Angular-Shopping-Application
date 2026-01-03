import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AllproductsService } from '../../../../services/allproducts.service';
import { AllcategoryService } from '../../../../services/allcategory.service';
import { SearchServiceService } from '../../../../services/search-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent implements OnInit {
  constructor(
    private productService:AllproductsService,
    private categoryser:AllcategoryService,
    private fb:FormBuilder,
    private router:Router,
    private searchservice :  SearchServiceService,
    private route:ActivatedRoute, 
     ){}
     ngOnInit(): void {
       this.getAllCategorys();
      this.generateNumericId();
       this.createprofrm.get('categoryId')?.setValue('0');
       this.route.queryParams.subscribe(params => {
        if (params['true']) {
          this.editdata = this.searchservice.getEditData();
          if (this.editdata) {
            this.createprofrm.patchValue(this.editdata);
            this.showUpdateButton = true;
            this.showCreateButton = false;
          }
        }
      });
          // Subscribe to form value changes to update editdata
      this.createprofrm.valueChanges.subscribe(value => {
      this.editdata = { ...this.editdata, ...value }; // Merge form value changes into editdata
      // By using the spread operator (...), this code merges the changes from the
      //  form value into the existing editdata object. 
      //  This ensures that whenever the form values change, 
      //  editdata is updated accordingly.
    });
     }
  showCreateButton:boolean = true;
  showUpdateButton:boolean = false;
  ActiveComponent:string = "";
  allcategory:any[] = [];
  editdata:any = [];
 
  public createprofrm = this.fb.group({
    productSku:this.fb.control(''),
    productName:this.fb.control('',[Validators.required]),
    brandName:this.fb.control('',[Validators.required]),
    productPrice:this.fb.control('',[Validators.required]),
    givingPrice:this.fb.control('',[Validators.required]),
    itemqty:this.fb.control('',[Validators.required]),
    categoryId:this.fb.control('',[Validators.required]),
    deliveryTimeSpan:this.fb.control('',[Validators.required]),
    firstproductImageUrl:this.fb.control('',[Validators.required]),
    secondproductImageUrl:this.fb.control('',[Validators.required]),
    thirdproductImageUrl:this.fb.control('',[Validators.required]),
    fourthproductImageUrl:this.fb.control('',[Validators.required]),
    fifthproductImageUrl:this.fb.control('',[Validators.required]),
    sixthproductImageUrl:this.fb.control('',[Validators.required]),
    productDescription:this.fb.control('',[Validators.required]),
    stylecode:this.fb.control('',[Validators.required]),
    pattern:this.fb.control('',[Validators.required]),
    occasion:this.fb.control('',[Validators.required]),
    blosepiecelength:this.fb.control('',[Validators.required]),
    sarilength:this.fb.control('',[Validators.required]),
    off:this.fb.control('',[Validators.required]),
    productId:this.fb.control(''),
    rating:this.fb.control(''),
    review:this.fb.control(''),
    ratingindegits:this.fb.control(''),
    bankofferinpercentage:this.fb.control(''),
    bankandcard:this.fb.control(''),
  })
  public CreateProduct(data:any){
    if(this.createprofrm.valid){
     this.productService.GetProducts(data).subscribe((resp)=>{
      this.generateNumericId();
      this.createprofrm.patchValue({
        productId: resp.id
      });
       Swal.fire({
         title: 'Success',
         text: 'Add Successfully',
         icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
         confirmButtonText: 'OK',
         cancelButtonText: 'Cancel', // For confirm and cancel buttons
         showCancelButton: true, // Show cancel button
       })
       this.Resetprdfrm();
      })
    }else{
     Swal.fire({
       title:'Error',
       text: 'Enter All Fields',
       icon: 'info', // You can use 'success', 'error', 'warning', 'info', or 'question'
       confirmButtonText: 'OK',
       cancelButtonText: 'Cancel', // For confirm and cancel buttons
       showCancelButton: true, // Show cancel button
     })
    }
   }
   update() {
    if (this.editdata && this.editdata.id) { // Ensure editdata and id exist
      this.productService.Updateproducts(this.editdata.id, this.editdata).subscribe((resp) => {
        Swal.fire({
          title: 'Success',
          text: 'Updated Successfully',
          icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel', // For confirm and cancel buttons
          showCancelButton: true, // Show cancel button
        })
        this.router.navigate(['/products'])
      });
    } else {
      console.log("Invalid data for update");
    }
  }
  
   generateNumericId(){
    // Generate a random number between 100 and 999 (inclusive)
    const randomNum = Math.floor(Math.random() * 900) + 100;
    // Convert the random number to a string
    const numericId = randomNum.toString();
    this.createprofrm.get('productId')?.setValue(numericId);
    return numericId;
 }
 public getAllCategorys(){
  this.categoryser.GetallCategory().subscribe((data)=>{
     this.allcategory = data;
  })
}
   public Resetprdfrm(){
    this.createprofrm.reset();
    this.createprofrm.removeValidators;
    this.createprofrm.get('categoryId')?.setValue('0');
    this.generateNumericId();
    this.showCreateButton = true;
    this.showUpdateButton = false;
  }  
}
