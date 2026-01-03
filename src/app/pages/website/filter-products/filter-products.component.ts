import { Component} from '@angular/core';
import { Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {
  materials = [
    { id: 'material1', name: 'Silk' },
    { id: 'material2', name: 'Art Silk' },
    { id: 'material3', name: 'Tissar' },
    { id: 'material4', name: 'Bridal' }
  ];

  collections = [
    { id: 'collection1', name: 'Kalamkari' },
    { id: 'collection2', name: 'Handloom' },
    { id: 'collection3', name: 'Bridal Kanchipuram Sarees' },
    { id: 'collection4', name: 'Tissue Kanchipuram Sarees' },
  ];
  price =[
    {id:'price1', name:'15000 to 20000',value:'15000 - 20000'},
    {id:'price1', name:'Over 20,000', value:'20000'},
    {id:'price1', name:'over 10',value:'10'},
  ]
 material:string = "";
 collection:string = "";
 cost:any = "";
 showfilterlist:boolean = false;
 materialfilterlist:boolean = false;
 costfilterlist:boolean = false;

  onMaterialChange(event: any) {
    this.material = event.target.value;
  }

  onCollectionChange(event: any) {
    this.collection = event.target.value;
  }
  onCostChange(event:any){
    this.cost= event.target.value;
  }
  clickfilterlist(){
    this.showfilterlist = !this.showfilterlist; 
  }
  materialfilter(){
    this.materialfilterlist = !this. materialfilterlist; 
  }
  clickcostfilterlist(){
     this. costfilterlist = !this. costfilterlist;
  }
  @Output() public filterdata:EventEmitter<any> = new EventEmitter();
  save(){
   const data:any = {}
   data.materialdata = this.material;
   data.collectiondata = this.collection;
   data.costdata = this.cost;
   this.filterdata.emit(data);
  }
}
