import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './section/header/header.component';
import { SidebarComponent } from './section/sidebar/sidebar.component';
import { FooterComponent } from './section/footer/footer.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignupComponent } from './sign/signup/signup.component';
import { ContractComponent } from './pages/contract/contract.component';
import { SprComponent } from './pages/spr/spr.component';
import { EprComponent } from './pages/epr/epr.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfilComponent } from './pages/profil/profil.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthServiceService } from './services/auth-service.service';
import { GuardService } from './services/guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    ContractComponent,
    SprComponent,
    EprComponent,
    DashboardComponent,
    ProfilComponent,
    LockscreenComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [
    AuthServiceService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
