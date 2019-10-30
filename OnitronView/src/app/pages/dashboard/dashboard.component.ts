import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
etat = true;
mySubscription: any;
rel;
  constructor(private router : Router) {

    
   }
   

  ngOnInit() {
    
   this.rel = sessionStorage.getItem("reload");
   
   if(this.rel =="1"){

    location.reload();
    sessionStorage.setItem("reload", "2");

   }
  }
  ngOnDestroy() {
    sessionStorage.setItem("reload", "1");
  }

}
