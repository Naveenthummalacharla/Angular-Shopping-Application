import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) { }
  private searchQuerySubject = new BehaviorSubject<string>('');
  private itemData:string = "";
  setSearchQuery(query:string){
    this.searchQuerySubject.next(query);
  }
  getSerachQuery(){
    return this.searchQuerySubject.asObservable();
  }

  setEditData(data:string){
    this.itemData = data;
  }
  getEditData(){
    return this.itemData;
  }
}
