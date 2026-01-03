import { Component, OnInit } from '@angular/core';
import { AllcategoryService } from '../../../../services/allcategory.service';
import { AllproductsService } from '../../../../services/allproducts.service';
import { SearchServiceService } from '../../../../services/search-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
productName: any;
  constructor(
    private categoryser:AllcategoryService,
    private productService:AllproductsService,
    private router:Router,
    private searchservice :  SearchServiceService 
     ){}
  ngOnInit(): void {
    this. Allproducts();
    this.searchservice.getSerachQuery().subscribe((data)=>{
       this.searchResults = data;
       this.filterProducts();
    })
  }
  allcategory:any = [];
  allProducts:any = [];
  searchResults:any = [];
  filteredproducts:any = [];


 public openSidePannel(){
    //  this.isSidePanelVisible = true;
    //  this.createprofrm.get('categoryId')?.setValue('0');
    this.router.navigate(['/newproductadd'])

  }

public getAllCategorys(){
  this.categoryser.GetallCategory().subscribe((data)=>{
     this.allcategory = data;
  })
}

public Allproducts():void{
  this.productService.Receiveallproducts().subscribe((resp)=>{
    this.allProducts = resp;
    this.filterProducts();
  })
}
filterProducts() {
  if(this.searchResults.trim() === "") {
    this.filteredproducts = this.allProducts;
  } else {
    this.filteredproducts = this.allProducts.filter((product: any) =>
      product.productName.toLowerCase().includes(this.searchResults.toLowerCase())
    );
  }
}
onEdit(item:any){
  this.searchservice.setEditData(item);
  this.router.navigate(['/newproductadd'],{ queryParams: { true: true }})
}
ondelete(data:any){
  this.productService.DeleteProduct(data.id).subscribe((data)=>{
    Swal.fire({
      title: data.brandName,
      text: 'Deleted Successfully',
      icon: 'success', // You can use 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel', // For confirm and cancel buttons
      showCancelButton: true, // Show cancel button
    })
     this.Allproducts()
  })
}


}
