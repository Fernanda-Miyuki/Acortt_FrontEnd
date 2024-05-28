import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { TelapesquisaComponent } from './telapesquisa/telapesquisa.component';
import { TelamodalComponent } from './telamodal/telamodal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component:  HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'telapesquisa', component: TelapesquisaComponent},
  { path: 'telamodal', component: TelamodalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }