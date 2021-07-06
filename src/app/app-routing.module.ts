import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
 { path:"products" ,component:ProductsComponent},
 { path:"new-product" ,component:NewProductComponent},
 { path:"",redirectTo:"products",pathMatch:'full'},
 { path:"edit-product/:id" ,component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
