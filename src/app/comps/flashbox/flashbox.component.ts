import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flashbox',
  templateUrl: './flashbox.component.html',
  styleUrls: ['./flashbox.component.css']
})
export class FlashboxComponent {
  @Input() title?:string;
  @Input() body?:string;
  @Input() paras?:string[];
}
