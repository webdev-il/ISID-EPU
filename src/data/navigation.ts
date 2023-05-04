import { Routes,Route } from "@angular/router";
import { MsqepageComponent } from "src/app/pages/academics/msqepage/msqepage.component";
import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { HomePageRoutes } from "./homepage";
import { PlaceholderComponent } from "src/app/pages/placeholder/placeholder.component";
import { PhdProgramPageComponent } from "src/app/pages/academics/phd-program-page/phd-program-page.component";
import { miscRoutes } from "./miscroutes";

export interface routeSpec{
    label:string;
    route?:string;
    component?:any;
    children?:routeSpec[]
}
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
                component:PlaceholderComponent

            }
        ]
    },
    {
        label:`People`,
        route:`people`,
        component:PlaceholderComponent

        // children:[
        //     {
        //         label:`faculty`,
        //         route:``,
        //     },
        //     {
        //         label:`visitors`,
        //         route:``
        //     },
        //     {
        //         label:`PhD students`,
        //         route:``
        //     }
        // ]
    },
    {
        label:`Research`,
        route:`research`,
        component:PlaceholderComponent

        // children:[
        //     {
        //         label:`todo`,
        //         route:``
        //     }
        // ]
    },
    {
        label:`Events`,
        route:`events`,
        component:PlaceholderComponent

        // children:[
        //     {
        //         label:`todo`,
        //         route:``
        //     }
        // ]
    },
    {
        label:`Research Centers`,
        route:`researchcenters`,
        component:PlaceholderComponent

        // children:[
        //     {
        //         label:`todo`,
        //         route:``
        //     }
        // ]
    }
]

export function parseRoutes(navbarroutes:routeSpec[]):Routes{
    const routes:Routes = navbarroutes.map((routespec,index,[])=>{
        return parseRouteSpec(routespec);
    });
    routes.push(...HomePageRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...objectToVals(miscRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    console.log(routes)
    return routes;
}

function parseRouteSpec(routespec: routeSpec) {
    let route: Route = {};
    if (routespec.component) {
        route = {
            path: routespec.route,
            component: routespec.component
        };
    }
    else {
        if (routespec.children) {
            let basePath = routespec.children[0].route!.split(`/`)[0];
            route = {
                path: basePath,
                children: routespec.children.map((childRouteSpec, index, value) => {
                    let childRoute: Route = {
                        path: childRouteSpec.route?.split(`/`).slice(1, undefined).join(`/`),
                        component: childRouteSpec.component
                    };
                    return childRoute;
                })
            };
        }
    }
    return route;
}

export function objectToVals<T>(object:{[key:string]:T}):T[]{
    return Object.keys(object).map((key,index,[])=>object[key]);
}