import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { HomeComponent } from '../components/home/home.component';
import { MobileComponent } from '../components/mobile/mobile.component';
import { UpdateProductComponent } from '../components/update-product/update-product.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {path:'addProduct',component:AddProductComponent   },
      {path:'mobiles',component:MobileComponent},
      {path:'updateProdact/:id',component:UpdateProductComponent}
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
