import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { telapesquisaComponent } from './telapesquisa/telapesquisa.component';
import { telamodalComponent } from './telamodal/telamodal.component.spec';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'product', component: ProductComponent },
    { path: 'telapesquisa', component: telapesquisaComponent },
    { path: 'telamodal', component: telamodalComponent }
];
