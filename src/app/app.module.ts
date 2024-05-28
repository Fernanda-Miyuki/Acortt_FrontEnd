import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarlogComponent } from './navbarlog/navbarlog.component';
import { TelapesquisaComponent } from './telapesquisa/telapesquisa.component';
import { TelamodalComponent } from './telamodal/telamodal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { CardsliderComponent } from './cardslider/cardslider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    TelapesquisaComponent,
    NavbarlogComponent,
    TelamodalComponent,
    SliderComponent,
    CardsliderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
