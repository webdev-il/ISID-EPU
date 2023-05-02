import { Component } from '@angular/core';
import { NavBarRoutes, routeSpec } from 'src/data/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
setactive(route?: routeSpec) {
  if(route){
    this.activeRouteIndex = this.routes.indexOf(route);
  }
  else{
    this.activeRouteIndex = -1;
  }
}
  routes:routeSpec[] = NavBarRoutes;
  activeRouteIndex:number = -1;
  constructor(){
    console.log(this.routes)
  }
}
