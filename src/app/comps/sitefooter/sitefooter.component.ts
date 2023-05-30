import { Component } from '@angular/core';
import { HomePageRoutes } from 'src/data/homepage';

@Component({
  selector: 'app-sitefooter',
  templateUrl: './sitefooter.component.html',
  styleUrls: ['./sitefooter.component.css']
})
export class SitefooterComponent {
  homePageRoutes = HomePageRoutes;
}
