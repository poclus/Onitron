import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private autservice : AuthServiceService) { }

  ngOnInit() {
  }

  onLogscreen(){

    console.log("onlogscreen");
    this.autservice.lockscreen();


  }

}
