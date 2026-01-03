import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllcategoryService {

  constructor(private http:HttpClient) { }
 public  GetallCategory():Observable<any>{
    return this.http.get<any>(" http://localhost:3000/data")
 }
}
