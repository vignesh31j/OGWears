import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OversizedComponent } from './pages/product/oversized/oversized.component';
import { HoodiesComponent } from './pages/product/hoodies/hoodies.component';
import { RegularComponent } from './pages/product/regular/regular.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';

export const routes: Routes = [
    {path:"",component:DashboardComponent},
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"about",component:AboutComponent},
    {path:"profile",component:ProfileComponent},
    {path:"oversized",component:OversizedComponent},
    {path:"hoodies",component:HoodiesComponent},
    {path:"regular",component:RegularComponent},
    {path:"cart",component:CartComponent},
    {path:"cart",component:CartService},
];
