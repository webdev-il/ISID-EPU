import { Routes,Route } from "@angular/router";
import { MsqepageComponent } from "src/app/pages/academics/msqepage/msqepage.component";
import { HomepageComponent } from "src/app/pages/homepage/homepage.component";

export interface routeSpec{
    label:string;
    route?:string;
    component?:any;
    children?:routeSpec[]
}
export const NavBarRoutes: routeSpec[] = [
    {
        label:'Home',
        route: '',
        component:HomepageComponent
    },
    {
        label:'Academics',
        children:[
            {
                label:'MSQE',
                route:'academics/msqe',
                component:MsqepageComponent
            },
            {
                label:'PhD program',
                route:'academics/phd',
                component:HomepageComponent
            },
            {
                label:'Courses',
                route:'academics/courses',
                component:HomepageComponent

            }
        ]
    },
    {
        label:'People',
        route:'people',
        component:HomepageComponent

        // children:[
        //     {
        //         label:'faculty',
        //         route:'',
        //     },
        //     {
        //         label:'visitors',
        //         route:''
        //     },
        //     {
        //         label:'PhD students',
        //         route:''
        //     }
        // ]
    },
    {
        label:'Research',
        route:'research',
        component:HomepageComponent

        // children:[
        //     {
        //         label:'todo',
        //         route:''
        //     }
        // ]
    },
    {
        label:'Events',
        route:'events',
        component:HomepageComponent

        // children:[
        //     {
        //         label:'todo',
        //         route:''
        //     }
        // ]
    },
    {
        label:'Research Centers',
        route:'researchcenters',
        component:HomepageComponent

        // children:[
        //     {
        //         label:'todo',
        //         route:''
        //     }
        // ]
    }
]
export function parseRoutes(navbarroutes:routeSpec[]):Routes{
    const routes:Routes = navbarroutes.map((routespec,index,[])=>{
        let route:Route = {};
        if(routespec.component){
            route = {
                path:routespec.route,
                component:routespec.component
            }
        }
        else{
            if(routespec.children){
                let basePath = routespec.children[0].route!.split('/')[0]
                route = {
                    path:basePath,
                    children:routespec.children.map((childRouteSpec,index,value)=>{
                        let childRoute:Route = {
                            path:childRouteSpec.route?.split('/').slice(1,undefined).join('/'),
                            component:childRouteSpec.component
                        };
                        return childRoute;
                    })
                }
            }
        }
        return route;
    });
    console.log(routes)
    return routes;
}