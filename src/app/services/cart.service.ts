import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private likeList: any[] = [];

  private cartSubject = new BehaviorSubject<any[]>([]);
  private likeListSubject = new BehaviorSubject<any[]>([]);

  cartObservable = this.cartSubject.asObservable();
  likeListObservable = this.likeListSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCart();
      this.loadLikeList();
    }
  }

  // Cart Operations
  private saveCart() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    this.cartSubject.next([...this.cart]);
  }

  private loadCart() {
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
      this.cartSubject.next([...this.cart]);
    }
  }

  getCart() {
    return [...this.cart];
  }

  addToCart(item: any) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.saveCart();
  }

  minToCart(item: any) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity -= 1;
      if (existingItem.quantity <= 0) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
      }
    }
    this.saveCart();
  }

  removeCart(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    this.saveCart();
  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalQuantity(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  // Like List Operations
  private saveLikeList() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('likeList', JSON.stringify(this.likeList));
    }
    this.likeListSubject.next([...this.likeList]);
  }

  private loadLikeList() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLikeList = localStorage.getItem('likeList');
      if (savedLikeList) {
        this.likeList = JSON.parse(savedLikeList);
      }
      this.likeListSubject.next([...this.likeList]);
    }
  }

  getLikeList() {
    return [...this.likeList];
  }

  addToLike(item: any) {
    const existingItem = this.likeList.find(likeItem => likeItem.id === item.id);
    if (!existingItem) {
      this.likeList.push({ ...item });
    }
    this.saveLikeList();
  }

  removeFromLike(item: any) {
    this.likeList = this.likeList.filter(likeItem => likeItem.id !== item.id);
    this.saveLikeList();
  }

  clearLikeList() {
    this.likeList = [];
    this.saveLikeList();
  }
}
