import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { TelapesquisaComponent } from './telapesquisa/telapesquisa.component';
import { TelamodalComponent } from './telamodal/telamodal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component:  HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'product', component: ProductComponent },
  { path: 'telapesquisa', component: TelapesquisaComponent},
  { path: 'telamodal', component: TelamodalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
