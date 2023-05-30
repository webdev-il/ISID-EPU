import { PersonPageComponent } from "src/app/pages/people/person-page/person-page.component";
import { dictionaryToRouteList } from "./rtl.utils";

export interface ProfileLinkSpec{
    site:string;
    link:string;
}
export interface personPageSpec{
    name:string;
    subtitle:string;
    image:string;
    website:string;
    profileLinks:ProfileLinkSpec[]
}
export type personsSpec = {[key:string]:personPageSpec};

export const PersonsData:personsSpec = {
    farzana_afridi:{
        name:'Farzana Afridi',
        image:'assets/people/farzana.jpg',
        website:'https://www.isid.ac.in/~fafridi/',
        subtitle:`PhD, University of Michigan<br>
                    Area: development economics, labour economics`,
        profileLinks:[
            {
                site:'LinkedIn',
                link:''
            }
        ]
    }
};

export const personRoutes = dictionaryToRouteList(PersonsData,'people/individual/',PersonPageComponent)