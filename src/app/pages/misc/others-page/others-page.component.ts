import { Component,OnInit } from '@angular/core';
import { otherSpec, othersData } from 'src/data/otherspage';

@Component({
  selector: 'app-others-page',
  templateUrl: './others-page.component.html',
  styleUrls: ['./others-page.component.css']
})
export class OthersPageComponent implements OnInit{
  allData:otherSpec = othersData;
  data:any = {
    title:`Loading`,
    groups:[]
  }
  ngOnInit(){
    let parts = (window.location.href).split('/')
    let key = parts[parts.length-1]
    this.data = Object(this.allData)[key]
  }
}
