import { Component, OnInit} from '@angular/core';
import { AllcategoryService } from '../../../../services/allcategory.service';
import { AllproductsService } from '../../../../services/allproducts.service';
import { SearchServiceService } from '../../../../services/search-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  constructor(
    private categoryserv : AllcategoryService,
    private productservice : AllproductsService,
    private router : Router,
    private searchser : SearchServiceService,
  ){}
  
  allcategories:any[] = [];
  CartItems:any[] = [];
  WatchList:any[] = [];
  searchQuery: string = '';
 isDropdownOpen: boolean = false;
 showModal: boolean = false;
  ngOnInit(): void {
   this.GetallCategories();
   this.productservice.Update$.subscribe(()=>{
    this.GetCartproducts();
    this.GetWatchList();
   })
   this.GetCartproducts();
  }
  
  toggleDropdown(event: Event): void {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  dropdownClick(event: Event): void {
    event.stopPropagation();
  }
  //search functionality
  search(query: string): any {
    this.searchser.setSearchQuery(query)
  }
  public GetallCategories(){
    this.categoryserv.GetallCategory().subscribe((data)=>{
      this.allcategories = data;
    })
  }
  public navigatetoproducts(id:number){
     this.router.navigate(['/products',id])
  }
  public GetCartproducts(){
    this.productservice.CartItems().subscribe((data)=>{
       this.CartItems = data;
    })
  }
  public GetWatchList(){
    this.productservice.WatchList().subscribe((data)=>{
       this.WatchList = data
    })
  }
  public closemodel(){
    const Modeldiv = document.getElementById('myModal');
    if(Modeldiv != null){
      Modeldiv.style.display = 'none'
       }
       this.showModal = false;
    } 
    public OpenModel(){
      const Modeldiv = document.getElementById('myModal');
      if(Modeldiv != null){
        Modeldiv.style.display = 'block'
         }
         this.showModal = true;
      }
}
