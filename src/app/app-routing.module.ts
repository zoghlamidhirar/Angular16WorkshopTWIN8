import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from '../../src/app/product-category/product-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:"products", component:ProductsCategoryQPComponent},
  {path:"products/:id", component:ProductCategoryComponent},
  // { path: "**", component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
