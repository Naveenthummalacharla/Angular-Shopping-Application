import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { ProductComponent } from './pages/website/product/product.component';
import { CustomercartComponent } from './pages/website/customercart/customercart.component';
import { CustomerwatchComponent } from './pages/website/customerwatch/customerwatch.component';
import { CustomerViewProductComponent } from './pages/website/customer-view-product/customer-view-product.component';
import { AddNewProductComponent } from './pages/admin/add-new-product/add-new-product.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { CustomerordersComponent } from './pages/website/customerorders/customerorders.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductlistComponent } from './pages/website/productlist/productlist.component';
import { InformationFormComponent } from './pages/website/CheckoutForms/information-form/information-form.component';
import { BlankLayoutComponent } from './pages/OrderDetails/blank-layout/blank-layout.component';
import { ShippingFormComponent } from './pages/website/CheckoutForms/shipping-form/shipping-form.component';

const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: LandingComponent, 
    canActivate: [authGuard], 
    children: [
      { path: 'products/:id', component: CategoryProductsComponent },
      {path:"productlist/:name/:categoryid", component:ProductlistComponent },
      { path: "productlist/all", component: ProductlistComponent },
      { path: 'shop', component: ProductComponent },
      { path: 'cart', component: CustomercartComponent },
      { path: 'watch', component: CustomerwatchComponent },
      { path: 'viewproduct/:id/:from', component: CustomerViewProductComponent },
      // { path: 'orders', component: CustomerordersComponent },
    ]
  },
  { 
    path: '', 
    component: LayoutComponent, 
    canActivate: [authGuard], 
    children: [
      {path:'dashboard', component:DashboardComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'category', component: CategoriesComponent },
      { path: 'newproductadd', component: AddNewProductComponent },
      {path:'order', component:OrderComponent},
    ]
  },
  {
    path:'', component:BlankLayoutComponent,
    canActivate:[authGuard],
    children:[
      {path:'orders', component:CustomerordersComponent},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
