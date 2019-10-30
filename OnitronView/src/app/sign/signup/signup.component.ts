import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user : User ;
  constructor(private router : Router, private autservice : AuthServiceService) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(){

    this.autservice.signup(this.user).subscribe(data =>{
console.log("signup begin");
      if(data){

        console.log(data);
        this.router.navigate(['/signin'])
      }else{
        console.log(data);
       // location.reload();
      }

      

    });
   
  }

}
