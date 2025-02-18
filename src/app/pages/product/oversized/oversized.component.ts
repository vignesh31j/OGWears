import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-oversized',
  imports: [CommonModule],
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

  cart: any[] = [];
  addToCart(selectedShirt: any) {
    const ex_pro = this.cart.find((item) => item.id === selectedShirt.id);
    if (ex_pro) {
      ex_pro.quantity += 1;
    } else {
      this.cart.push({ ...selectedShirt, quantity: 1 });
    }
  }

  minToCart(selectedShirt: any) {
    const ex_pro = this.cart.find((item) => item.id === selectedShirt.id);
    if (ex_pro) {
      ex_pro.quantity -= 1;
    } else {
      this.cart.push({ ...selectedShirt, quantity: 1 });
    }
    if (ex_pro.quantity < 0) {
      ex_pro.quantity = 0;
    }
  }

  removeCart(selectedShirt: any) {
    this.cart = this.cart.filter(item => item.id !== selectedShirt.id);
  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalQuantity(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
  
}