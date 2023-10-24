import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgStyleDirective } from './directives/img-style.directive';
import { CreditCardFormatterPipe } from './pipes/credit-card-formatter.pipe';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { NewProductComponent } from './components/new-product/new-product.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    ImgStyleDirective,
    CreditCardFormatterPipe,
    ProductsParentComponent,
    SideMenuComponent,
    AboutUsComponent,
    ContactComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    NewProductComponent,
    UserRegistrationComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
