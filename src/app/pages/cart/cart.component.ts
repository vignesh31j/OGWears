import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports:[CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartObservable.subscribe(updatedCart => {
      this.cart = updatedCart;
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  minToCart(item: any) {
    this.cartService.minToCart(item);
  }

  removeCart(item: any) {
    this.cartService.removeCart(item);
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
