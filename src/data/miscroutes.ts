import { PlaceholderComponent } from "src/app/pages/placeholder/placeholder.component";
import { routeSpec } from "./navigation";
import { PastPhdStudentsComponent } from "src/app/pages/misc/past-phd-students/past-phd-students.component";
import { PastSeminarsPageComponent } from "src/app/pages/misc/past-seminars-page/past-seminars-page.component";

export const miscRoutes:{[key:string]:routeSpec} = {
    pastPhdStudents:{
        route:'misc/pastphdstudents',
        component:PastPhdStudentsComponent,
        label:'Past Phd Students'
    },
    pastSeminars:{
        route:`misc/pastseminars`,
        component:PastSeminarsPageComponent,
        label:`Past Seminars`
    }

}