import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-like',
  imports: [CommonModule],
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  likeList: any[] = [];

  constructor(private cartService: CartService) {
    this.cartService.likeListObservable.subscribe(updatedLikeList => {
      this.likeList = updatedLikeList;
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.cartService.removeFromLike(item); // Remove from wishlist when added to cart
  }

  removeFromLike(item: any) {
    this.cartService.removeFromLike(item);
  }

  clearLikeList() {
    this.cartService.clearLikeList();
  }
}
