import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SprComponent } from './pages/spr/spr.component';
import { EprComponent } from './pages/epr/epr.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignupComponent } from './sign/signup/signup.component';
import { ContractComponent } from './pages/contract/contract.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GuardService } from './services/guard.service';


const routes: Routes = [
  {path: 'dashboard' ,canActivate :[GuardService], component: DashboardComponent},
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'simplepayment' ,canActivate :[GuardService], component: SprComponent},
  {path: 'escrowpayment' ,canActivate :[GuardService], component: EprComponent},
  {path: 'signin' , component: SigninComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'displayContract' ,canActivate :[GuardService], component: ContractComponent},
  {path: 'profil' ,canActivate :[GuardService], component: ProfilComponent},
  {path: 'screen' ,canActivate :[GuardService], component: LockscreenComponent},
  {path: 'not-found' , component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
