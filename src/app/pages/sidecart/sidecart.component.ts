import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidecart',
  imports:[CommonModule],
  templateUrl: './sidecart.component.html',
  styleUrl: './sidecart.component.css'
})
export class SidecartComponent {

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
