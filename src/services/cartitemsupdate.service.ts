import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartitemsupdateService {
  cartItemsChanged: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  updateCartItemsCount(count: number) {
    this.cartItemsChanged.emit(count);
  }
}
