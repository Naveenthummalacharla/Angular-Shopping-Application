import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../../../services/search-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
 constructor(
  private searchservice:SearchServiceService
 ){}
 ngOnInit(): void {

  }
showSearchButton: boolean = false;
 searchData:string = "";
 
 onInputChange(value: string): void {
  this.showSearchButton = value.trim() !== ''; // Set showSearchButton based on whether searchData has a value
}

}
