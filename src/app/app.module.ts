import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CustomerComponent } from './pages/admin/customer/customer.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CustomercartComponent } from './pages/website/customercart/customercart.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerordersComponent } from './pages/website/customerorders/customerorders.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { ProductComponent } from './pages/website/product/product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CustomerwatchComponent } from './pages/website/customerwatch/customerwatch.component';
import { CustomerViewProductComponent } from './pages/website/customer-view-product/customer-view-product.component';
import { AddNewProductComponent } from './pages/admin/add-new-product/add-new-product.component';
import { TimelineModule } from 'primeng/timeline';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { ProductlistComponent } from './pages/website/productlist/productlist.component';
import { FilterProductsComponent } from './pages/website/filter-products/filter-products.component';
import { DialogModule } from 'primeng/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { InformationFormComponent } from './pages/website/CheckoutForms/information-form/information-form.component';
import { ShippingFormComponent } from './pages/website/CheckoutForms/shipping-form/shipping-form.component';
import { PaymentFormComponent } from './pages/website/CheckoutForms/payment-form/payment-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BlankLayoutComponent } from './pages/OrderDetails/blank-layout/blank-layout.component';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    CustomerComponent,
    CategoriesComponent,
    OrderComponent,
    ProductsComponent,
    LandingComponent,
    CustomercartComponent,
    CheckoutComponent,
    CustomerordersComponent,
    CategoryProductsComponent,
    ProductComponent,
    CustomerwatchComponent,
    CustomerViewProductComponent,
    AddNewProductComponent,
    DashboardComponent,
    ProductlistComponent,
    FilterProductsComponent,
    InformationFormComponent,
    ShippingFormComponent,
    PaymentFormComponent,
    BlankLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TimelineModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    BrowserAnimationsModule ,
    ProgressSpinnerModule,
    MatFormFieldModule,
    CarouselModule.forRoot(),
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatMenuModule,
    DialogModule ,
    MatProgressSpinnerModule,
    MatTabsModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    RadioButtonModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
