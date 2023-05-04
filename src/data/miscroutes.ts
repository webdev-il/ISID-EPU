import { PlaceholderComponent } from "src/app/pages/placeholder/placeholder.component";
import { routeSpec } from "./navigation";

export const miscRoutes:{[key:string]:routeSpec} = {
    pastPhdStudents:{
        route:'misc/pastphdstudents',
        component:PlaceholderComponent,
        label:'Past Phd Students'
    }
}