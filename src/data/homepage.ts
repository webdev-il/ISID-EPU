import { routeSpec } from "./navigation";
import { MsqepageComponent } from "src/app/pages/academics/msqepage/msqepage.component";

export interface homePageDataSpec{
    bannerLink:string;
    links:routeSpec[]
}
export const HomePageData:homePageDataSpec = {
    bannerLink:'assets/banner.jpg',
    links:[
        {
            label:'Announcements',
            component:MsqepageComponent,
            route:'home/announcements'
        },
        {
            label:'About Us',
            component:MsqepageComponent,
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
}