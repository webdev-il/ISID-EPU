import { Component,Input } from '@angular/core';
import { paraSpec } from 'src/data/aboutuspage';

@Component({
  selector: 'app-paraspecbox',
  templateUrl: './paraspecbox.component.html',
  styleUrls: ['./paraspecbox.component.css']
})
export class ParaspecboxComponent {
  @Input() para?:paraSpec;
}
