import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-hoodies',
  imports: [CommonModule],
  templateUrl: './hoodies.component.html',
  styleUrl: './hoodies.component.css'
})
export class HoodiesComponent {

  OShirt = [
    {id: 21, img: "https://otakukulture.in/cdn/shop/files/zoro4_8b109a74-5e1d-4d06-ad06-bd82cb289f82.jpg?v=1732525043&width=713", name: "Zoro Hoodie", price: "999", ogprice: "1800" },
    {id: 22, img: "https://otakukulture.in/cdn/shop/files/TokyoManjiGangHoodie2.jpg?v=1710421083&width=713", name: "Tokyo Manji Gang Hoodie", price: "999", ogprice: "1800" },
    {id: 23, img: "https://otakukulture.in/cdn/shop/files/gojo4_b276a536-55e0-4a3b-ac95-06de96294c88.jpg?v=1732525242&width=713", name: "Gojo Hoodie", price: "999", ogprice: "1800" },
    {id: 24, img: "https://otakukulture.in/cdn/shop/files/SunGodLuffyHoodie1.webp?v=1710420125&width=713", name: "Luffy Hoodie", price: "999", ogprice: "1800" },
    {id: 25, img: "https://otakukulture.in/cdn/shop/files/Itachiembroideredhoodie4.jpg?v=1710421573&width=713", name: "Itachi Hoodie", price: "999", ogprice: "1800" },
    {id: 26, img: "https://otakukulture.in/cdn/shop/files/Akatsukiembroideredhoodie4.jpg?v=1710421220&width=713", name: "Akatsuki Hoodie", price: "999", ogprice: "1800" },
    {id: 27, img: "https://otakukulture.in/cdn/shop/files/ItadorixsukunaHoodie4.jpg?v=1710421755&width=713", name: "Itadori x sukuna Hoodie", price: "999", ogprice: "1800" },
    {id: 28, img: "https://otakukulture.in/cdn/shop/files/Mystery-Hoodie_1.jpg?v=1720641741&width=713", name: "Mystery Hoodie", price: "999", ogprice: "1800" },
    {id: 29, img: "https://otakukulture.in/cdn/shop/files/Bleachhoodie4.jpg?v=1710421875&width=713", name: "Ichigo Hoodie", price: "999", ogprice: "1800" },
    {id: 30, img: "https://otakukulture.in/cdn/shop/files/berserk_hoodie4_ba03e2ff-38a1-4311-96a6-bdbdaab117f5.jpg?v=1734094528&width=713", name: "Berserk Vintage Hoodie", price: "999", ogprice: "1800" },
  ]

  constructor(private cartService: CartService) {}
  
    addToCart(item: any) {
      this.cartService.addToCart(item);
    }
}
