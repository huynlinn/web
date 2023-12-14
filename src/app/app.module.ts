import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { OrderComponent } from './page/order/order.component';
import { PaymentComponent } from './page/payment/payment.component';
import { HeaderComponent } from './component/header/header.component';
import { TagsComponent } from './component/tags/tag.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FoodPageComponent } from './component/food-page/food-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent,
    PaymentComponent,
    HeaderComponent,
    TagsComponent,
    NotFoundComponent,
    FoodPageComponent,
    FooterComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
