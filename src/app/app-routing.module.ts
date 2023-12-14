import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { PaymentComponent } from './page/payment/payment.component';
import { OrderComponent } from './page/order/order.component';
import { FoodPageComponent } from './component/food-page/food-page.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tags',component: HomeComponent},
  {path:'foods/:id',component: FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'payment', component: PaymentComponent},
  {path:'order', component: OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

