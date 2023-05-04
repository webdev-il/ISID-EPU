import { Component } from '@angular/core';
import { PhdPageData, phdProgramSpecs } from 'src/data/phdprogrampage';

@Component({
  selector: 'app-phd-program-page',
  templateUrl: './phd-program-page.component.html',
  styleUrls: ['./phd-program-page.component.css']
})
export class PhdProgramPageComponent {
  data:phdProgramSpecs = PhdPageData;
}
