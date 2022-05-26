import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycartComponent } from './mycart/mycart.component';
import { AddAdminProductComponent } from './products/add-admin-product/add-admin-product.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-cart', component: MycartComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddAdminProductComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
