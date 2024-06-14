import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardsliderComponent } from './cardslider/cardslider.component';
import { SliderComponent } from './slider/slider.component';
import { TelamodalComponent } from './telamodal/telamodal.component';
import { TelapesquisaComponent } from './telapesquisa/telapesquisa.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';

import { LoginComponent } from './login/login.component';
import { NavbarlogComponent } from './navbarlog/navbarlog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardsliderComponent,
    SliderComponent,
    TelamodalComponent,
    TelapesquisaComponent,
    RegisterComponent,
    ProductComponent,
    ProfileComponent,

    LoginComponent,
    NavbarlogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgbModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
