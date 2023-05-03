import { MsqepageComponent } from "src/app/pages/academics/msqepage/msqepage.component";
import { routeSpec } from "./navigation";
import { AboutUsPageComponent } from "src/app/comps/about-us-page/about-us-page.component";

export interface homePageDataSpec{
    bannerLink:string;
    links:routeSpec[]
}
export const HomePageRoutes:routeSpec[] = [
    {
        label:'Announcements',
        component:MsqepageComponent,
        route:'home/announcements'
    },
    {
        label:'About Us',
        component:AboutUsPageComponent,
        route:'home/aboutus'
    },
    {
        label:'Contact',
        component:MsqepageComponent,
        route:'home/contact'
    },
    {
        label:'Placements',
        component:MsqepageComponent,
        route:'home/placements'
    }
]
export const HomePageData:homePageDataSpec = {
    bannerLink:'assets/banner.jpg',
    links:HomePageRoutes
}