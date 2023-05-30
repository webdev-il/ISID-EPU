import { Routes,Route } from "@angular/router";
import { MsqepageComponent } from "src/app/pages/academics/msqepage/msqepage.component";
import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { HomePageRoutes } from "./homepage";
import { PhdProgramPageComponent } from "src/app/pages/academics/phd-program-page/phd-program-page.component";
import { miscRoutes } from "./miscroutes";
import { CoursesPageComponent } from "src/app/pages/academics/courses-page/courses-page.component";
import { FacultyPageComponent } from "src/app/pages/people/faculty-page/faculty-page.component";
import { VisitorspageComponent } from "src/app/pages/people/visitorspage/visitorspage.component";
import { AcegdPageComponent } from "src/app/pages/events/acegd-page/acegd-page.component";
import { WorkshopsPageComponent } from "src/app/pages/events/workshops-page/workshops-page.component";
import { SeminarPageComponent } from "src/app/pages/events/seminar-page/seminar-page.component";
import { PhdStudentsPageComponent } from "src/app/pages/people/phd-students-page/phd-students-page.component";
import { otherRoutes } from "./otherspage";
import { personRoutes } from "./personspage";
import { objectToVals, parseRouteSpec, parseRoutes, routeSpec } from "./rtl.utils";

export const NavBarRoutes: routeSpec[] = [
    {
        label:`Home`,
        route: ``,
        component:HomepageComponent
    },
    {
        label:`Academics`,
        children:[
            {
                label:`MSQE`,
                route:`academics/msqe`,
                component:MsqepageComponent
            },
            {
                label:`PhD program`,
                route:`academics/phd`,
                component:PhdProgramPageComponent
            },
            {
                label:`Courses`,
                route:`academics/courses`,
                component:CoursesPageComponent

            }
        ]
    },
    {
        label:`People`,
        children:[
            {
                label:`Faculty`,
                route:`people/faculty`,
                component:FacultyPageComponent
            },
            {
                label:`Visitors`,
                route:`people/visitors`,
                component:VisitorspageComponent
            },
            {
                label:`PhD Students`,
                route:`people/phdstudents`,
                component:PhdStudentsPageComponent
            }
        ]
    },
    {
        label:`Research`,
        children:[
            {
                label:`Discussion Papers`,
                route:`https://ideas.repec.org/s/alo/isipdp.html`
            },
            {
                label:`Highlights`,
                route:'https://ideas.repec.org/s/alo/isipdp.html',
            }
        ]
    },
    {
        label:`Events`,
        route:`events`,
        children:[
            {
                label:`Seminars`,
                route:`events/seminars`,
                component:SeminarPageComponent
            },
            {
                label:`ACEGD`,
                route:`events/ACEGD`,
                component:AcegdPageComponent
            },
            {
                label:`Workshops`,
                route:`events/workshops`,
                component:WorkshopsPageComponent
            }
        ]
    },
    {
        label:`Research Centers`,
        children:[
            {
                label:`PPRU`,
                route:`https://sites.google.com/site/ppruisid/`
            },
            {
                label:`CECFEE`,
                route:`http://www.isid.ac.in/~cecfee`
            },
            {
                label:`IWWAGE-ISI`,
                route:`https://iwwage.isid.ac.in/`
            },
            {
                label:`IGC-India`,
                route:`http://www.theigc.org/countries/india-central`
            }
        ]
    }
]

export function getAllRoutes():Routes{
    const routes = parseRoutes(NavBarRoutes)
    routes.push(...HomePageRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...objectToVals(miscRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...(otherRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...(personRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    return routes
}
