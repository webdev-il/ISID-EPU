import { MsqepageComponent } from "src/app/pages/academics/msqepage/msqepage.component";
import { routeSpec } from "./navigation";
import { AboutUsPageComponent } from "src/app/pages/about-us-page/about-us-page.component";
import { AnnouncementsPageComponent } from "src/app/pages/announcements-page/announcements-page.component";
import { PlacementspageComponent } from "src/app/pages/placementspage/placementspage.component";
import { paraSpec } from "./aboutuspage";
import { ContactsPageComponent } from "src/app/pages/contacts-page/contacts-page.component";

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
            text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        }
    }
}