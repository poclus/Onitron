import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user : User ;
message : String;
  constructor(private router : Router,private authservice : AuthServiceService) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(){
    //consommation du service web du n point add
    console.log('debut login')
    console.log(this.user)
    this.authservice.login(this.user);
    
    
    
    
}

}
