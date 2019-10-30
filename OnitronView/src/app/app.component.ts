import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnitronView';

  
  ngOnDestroy() {
    sessionStorage.setItem("reload", "0");
  }
}
