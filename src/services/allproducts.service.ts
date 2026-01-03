import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  constructor(private http:HttpClient) { }

  public GetProducts(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/Products',data)
  }
  public Receiveallproducts():Observable<any>{
    return this.http.get<any>('http://localhost:3000/Products')
  }
  public ReceiveproductById(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/Products/${id}`)
  }
  public getProductsByCategoryId(categoryId:number):Observable<any>{
   return this.http.get<any>(`http://localhost:3000/Products`,{params:{categoryId:categoryId}})
  }
  public Receivedatabyid(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/Products/${id}`)
  }
  public Updateproducts(id:number,data:any): Observable<any> {
    return this.http.put<any>(` http://localhost:3000/Products/${id}`,data);
  }  
  public DeleteProduct(id:number):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/Products/'+id)
  }
  public AddToCart(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/cart',data)
  }
  public ReceivecartbyId(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:3000/cart/${id}`)
  }
  public Updatecart(data:any):Observable<any>{
  return this.http.put<any>(`http://localhost:3000/cart/${data.id}`,data);
  }
  public CartItems():Observable<any>{
    return this.http.get<any>('http://localhost:3000/cart')
  }
  public RemoveformCart(id:number):Observable<any>{
    return this.http.delete('http://localhost:3000/cart/'+id)
  }
  public AddWatchList(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/watch',data)
  }
  public WatchList():Observable<any>{
    return this.http.get('http://localhost:3000/watch')
  }
  public Deletewatchlist(id:number):Observable<any>{
  return this.http.delete<any>('http://localhost:3000/watch/'+id)
  }
  public Orderlist(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/orderlist",data)
  }
  public getorderlist():Observable<any>{
    return this.http.get("http://localhost:3000/orderlist")
  }
  public deleteorderlist(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/orderlist/"+id)
  }
  private UpdateSource = new BehaviorSubject<boolean>(false);
  Update$ = this.UpdateSource.asObservable();
  updateCart(){
    this.UpdateSource.next(true); 
  }
  updateWatch(){
    this.UpdateSource.next(true); 
  }
}
