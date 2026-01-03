import { Component, OnInit } from '@angular/core';
import { AllcategoryService } from '../../../../services/allcategory.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
 constructor(private categoryservice:AllcategoryService){}
  ngOnInit(): void {
    this.getAllCateggories();
  }
allCategorys:any[] = []

getAllCateggories(){
 this.categoryservice.GetallCategory().subscribe((data)=>{
  this.allCategorys = data;
 })
}

}
