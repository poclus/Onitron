import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {
 password : string;
 couleur ;
  constructor(private autservice:AuthServiceService, private router : Router) { }

  ngOnInit() {
   // this.autservice.isAuth = false;
    this.couleur = sessionStorage.getItem("couleur");
    sessionStorage.setItem("lock", "true");
    sessionStorage.setItem("state", 'false');
  }

  onSubmit(){
  //let  pass = JSON.parse(localStorage.getItem('psr'))
    console.log(this.password);
    console.log(this.couleur);
console.log('on submit');
if(this.password === sessionStorage.getItem("pwd")){
  sessionStorage.setItem("lock", "false");
  
  if( sessionStorage.getItem("lock")==="false"){
    console.log('good authentication');
    sessionStorage.setItem("reload", "1");
   this.router.navigate(['/dashboard']);
  }
 
}else{
  console.log('sinon');
  this.router.navigate(['/screen'])
 
}
console.log('terminer');

  }

}
