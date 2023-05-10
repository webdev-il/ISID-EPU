import { routeSpec } from "./navigation";
import { PastPhdStudentsComponent } from "src/app/pages/misc/past-phd-students/past-phd-students.component";

export const miscRoutes:{[key:string]:routeSpec} = {
    pastPhdStudents:{
        route:'misc/pastphdstudents',
        component:PastPhdStudentsComponent,
        label:'Past Phd Students'
    },

}