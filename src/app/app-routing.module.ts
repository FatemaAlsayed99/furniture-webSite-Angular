import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { userGuard } from './Guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ProductsParentComponent, title: 'Home Page' },
  {
    path: 'Products',
    component: ProductsComponent,
    title: 'Products Page',
    canActivate: [userGuard],
  },
  { path: 'About', component: AboutUsComponent, title: 'About Us' },
  {
    path: 'prdDetails/:pId',
    component: ProductDetailsComponent,
    title: 'Products Details',
  },
  { path: 'Contact', component: ContactComponent, title: 'Contact' },
  {
    path: 'admin/insertproduct/:pId',
    component: NewProductComponent,
    title: 'New Product',
    canActivate: [userGuard],
  },
  { path: 'Register', component: UserRegistrationComponent },
  { path: 'Login', component: UserLoginComponent },
  {
    path: 'Users',
    loadChildren: () =>
      import('src/app/components/user/user.module').then((m) => m.UserModule),
    canActivate: [userGuard],
  },
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
