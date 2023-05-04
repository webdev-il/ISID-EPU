import { Component } from '@angular/core';
import { PastPhdStudentsData, pastphdstudents as pastphdstudentSpec } from 'src/data/pastphdstudents';

@Component({
  selector: 'app-past-phd-students',
  templateUrl: './past-phd-students.component.html',
  styleUrls: ['./past-phd-students.component.css']
})
export class PastPhdStudentsComponent {
  data:pastphdstudentSpec = PastPhdStudentsData;
}
