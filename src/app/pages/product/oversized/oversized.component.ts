import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { SidecartComponent } from '../../sidecart/sidecart.component';

@Component({
  selector: 'app-oversized',
  imports: [CommonModule,SidecartComponent],
  templateUrl: './oversized.component.html',
  styleUrl: './oversized.component.css'
})
export class OversizedComponent {

  OShirt = [
    { id: 1, img: "https://otakukulture.in/cdn/shop/files/solo2.webp?v=1719403233&width=713", name: "Solo Leveling Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 2, img: "https://otakukulture.in/cdn/shop/files/Vagabond_I.webp?v=1719316751&width=713", name: "Vangabond Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 3, img: "https://otakukulture.in/cdn/shop/files/levi2.webp?v=1719399933&width=713", name: "Levi Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 4, img: "https://otakukulture.in/cdn/shop/files/Megumi_I.webp?v=1719316751&width=713", name: "Megumi Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 5, img: "https://otakukulture.in/cdn/shop/files/Yuta_I.webp?v=1719316751&width=713", name: "Yuta Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 6, img: "https://otakukulture.in/cdn/shop/files/Broly_i.webp?v=1719315929&width=713", name: "Broly Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 7, img: "https://otakukulture.in/cdn/shop/files/SHANKS_4.jpg?v=1729702932&width=713", name: "Shanks Vintage Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 8, img: "https://otakukulture.in/cdn/shop/files/aizen4.jpg?v=1736756196&width=713", name: "Aizen Oversized T-Shirt", price: "699", ogprice: 1000, quantity: 1 },
    { id: 9, img: "https://otakukulture.in/cdn/shop/files/ichigo1.jpg?v=1734593498&width=713", name: "Ichigo Vintage Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
    { id: 10, img: "https://otakukulture.in/cdn/shop/files/Berserk_I.webp?v=1719315585&width=713", name: "Berserk Vintage Oversized T-Shirt", price: 699, ogprice: 1000, quantity: 1 },
  ]

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  addToLike(item: any){
    this.cartService.addToLike(item);
  }
  
}