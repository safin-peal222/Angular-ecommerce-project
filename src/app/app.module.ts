import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './admin/register/register.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { MycartComponent } from './mycart/mycart.component';
import { AuthGuard } from './auth.guard';
import { AddAdminProductComponent } from './products/add-admin-product/add-admin-product.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AllDataComponent } from './all-data/all-data.component';
import { DataComponent } from './data/data.component';
import { RouterModule } from '@angular/router';
import { EditDataComponent } from './edit-data/edit-data.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    DashboardComponent,
    MycartComponent,
    AddAdminProductComponent,
    DashboardCardComponent,
    AllDataComponent,
    DataComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login', component: LoginComponent,

      },
      { path: 'register', component: RegisterComponent },
      { path: 'my-cart', component: MycartComponent, canActivate: [AuthGuard] },
      // { path: 'add-product', component: AddAdminProductComponent },
      {
        path: 'dashboard', component: DashboardComponent
      },

      { path: 'add-product', component: AddAdminProductComponent },
      { path: 'all-data', component: AllDataComponent },
      { path: 'edit/:id', component: EditDataComponent },



      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ])
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
