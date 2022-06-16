import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllElectProductsComponent } from './all-elect-products/all-elect-products.component';
import { AllFurnitureProdComponent } from './all-furniture-prod/all-furniture-prod.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllWatchesProdComponent } from './all-watches-prod/all-watches-prod.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"allProduct",component:AllProductsComponent},
   {path:"allElectronic",component:AllElectProductsComponent},
   {path:"allFurniture",component:AllFurnitureProdComponent},
   {path:"allWatches",component:AllWatchesProdComponent},
   {path:"login",component:LoginComponent},
   {path:"signup",component:SignupComponent},
   {path:"shoppingCart",component:ShoppingCartComponent},
   {path:"product/:id",component:ProductDetailsComponent},
   {
    path: 'admin',
    canActivate: [],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
