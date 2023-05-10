import { Component } from '@angular/core';
import { WorkshopsPageData, workshopsPageSpec } from 'src/data/workshopspage';

@Component({
  selector: 'app-workshops-page',
  templateUrl: './workshops-page.component.html',
  styleUrls: ['./workshops-page.component.css']
})
export class WorkshopsPageComponent {
  data:workshopsPageSpec = WorkshopsPageData;
}
