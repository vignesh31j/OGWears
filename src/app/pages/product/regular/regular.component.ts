import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { sign } from 'crypto';
import { SidecartComponent } from '../../sidecart/sidecart.component';

@Component({
  selector: 'app-regular',
  imports: [CommonModule,SidecartComponent],
  templateUrl: './regular.component.html',
  styleUrl: './regular.component.css'
})
export class RegularComponent {

  OShirt = [
    {id:11, img:"https://otakukulture.in/cdn/shop/files/ZoroRegularFitT-Shirt1.png?v=1710417777&width=713", name:"Zoro Regular T-Shirt", price:"499", ogprice:"899"},
    {id:12, img:"https://otakukulture.in/cdn/shop/files/GojoRegularFitT-Shirt2.webp?v=1710416337&width=713", name:"Gojo Regular T-Shirt", price:"499", ogprice:"899"},
    {id:13, img:"https://otakukulture.in/cdn/shop/files/ItachiUchihaRegularFitT-Shirt2.jpg?v=1710417428&width=713", name:"Uchiha Regular T-Shirt", price:"499", ogprice:"899"},
    {id:14, img:"https://otakukulture.in/cdn/shop/files/IsagiRegularFitT-Shirt1.webp?v=1710416932&width=713", name:"Isagi Regular T-Shirt", price:"499", ogprice:"899"},
    {id:15, img:"https://otakukulture.in/cdn/shop/files/ItachiRegularFitT-Shirt1.webp?v=1710417134&width=713", name:"Itachi Regular T-Shirt", price:"499", ogprice:"899"},
    {id:16, img:"https://otakukulture.in/cdn/shop/files/JotaroRegularFitT-Shirt1.webp?v=1710417521&width=713", name:"Jotaro Regular T-Shirt", price:"499", ogprice:"899"},
    {id:17, img:"https://www.otakusheaven.in/cdn/shop/files/Newmockups-oversized_17_2048x2048.png?v=1701945135", name:"Toji Regular T-Shirt", price:"499", ogprice:"899"},
    {id:18, img:"https://www.otakusheaven.in/cdn/shop/files/Untitleddesign_24_1024x1024.png?v=1693047756", name:"Vegeta Regular T-Shirt", price:"499", ogprice:"899"},
    {id:19, img:"https://www.otakusheaven.in/cdn/shop/files/62_2048x2048.png?v=1700690121", name:"Berserk Regular T-Shirt", price:"499", ogprice:"899"},
    {id:20, img:"https://www.otakusheaven.in/cdn/shop/files/demonslayer_1_2048x2048.png?v=1717160537", name:"Tanjiro Regular T-Shirt", price:"499", ogprice:"899"},
  ]

  constructor(private cartService: CartService) {}
  
    addToCart(item: any) {
      this.cartService.addToCart(item);
    }

    addToLike(item: any){
      this.cartService.addToLike(item);
    }
}
