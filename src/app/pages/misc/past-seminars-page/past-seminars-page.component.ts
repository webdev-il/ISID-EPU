import { Component } from '@angular/core';
import { PastSeminarsData, pastSeminarsSpec } from 'src/data/pastseminarspage';

@Component({
  selector: 'app-past-seminars-page',
  templateUrl: './past-seminars-page.component.html',
  styleUrls: ['./past-seminars-page.component.css']
})
export class PastSeminarsPageComponent {
  data:pastSeminarsSpec = PastSeminarsData;
}
