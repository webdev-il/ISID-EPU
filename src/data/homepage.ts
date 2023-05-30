import { MsqepageComponent } from "src/app/pages/academics/msqepage/msqepage.component";
import { AboutUsPageComponent } from "src/app/pages/about-us-page/about-us-page.component";
import { AnnouncementsPageComponent } from "src/app/pages/announcements-page/announcements-page.component";
import { PlacementspageComponent } from "src/app/pages/placementspage/placementspage.component";
import { ContactsPageComponent } from "src/app/pages/contacts-page/contacts-page.component";
import { paraSpec, routeSpec } from "./rtl.utils";

export interface homePageDataSpec{
    links:routeSpec[],
    bannerLink:string;
    welcomebox:{
        title:string;
        para:paraSpec;
    };
}
export const HomePageRoutes:routeSpec[] = [
    {
        label:`Announcements`,
        component:AnnouncementsPageComponent,
        route:`home/announcements`
    },
    {
        label:`About Us`,
        component:AboutUsPageComponent,
        route:`home/aboutus`
    },
    {
        label:`Contact`,
        component:ContactsPageComponent,
        route:`home/contact`
    },
    {
        label:`Placements`,
        component:PlacementspageComponent,
        route:`home/placements`
    }
]
export const HomePageData:homePageDataSpec = {
    bannerLink:`assets/banner.jpg`,
    links:HomePageRoutes,
    welcomebox:{
        title:`Welcome to the Economics and Planning Unit!`,
        para:{
            text:`The Economics and Planning Unit is a leading centre of research in
            Economics. With a Masters Programme in Quantitative Economics (MSQE),
            and a Doctoral programme, the Unit is also one of the premier
            institutions for graduate education in Economics in India.`
        }
    }
}