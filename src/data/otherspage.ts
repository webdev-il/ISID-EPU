import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { paraSpec } from "./aboutuspage";
import { HomePageRoutes } from "./homepage";
import { miscRoutes } from "./miscroutes";
import { OthersPageComponent } from "src/app/pages/misc/others-page/others-page.component";
import { Component } from "@angular/core";
import { Route } from "@angular/router";
import { routeSpec } from "./navigation";

export interface VersatilePageSpec {
    title: string;
    groups: {
        title?: string;
        paragraphs: paraSpec[];
    }[];
}

export type othersSpec = {[key:string]:VersatilePageSpec};

export const othersData: othersSpec = {
    demo: {
        title: 'Demo Article for New Pages',
        groups: [
            {
                title: 'Flashbox content',
                paragraphs: [
                    {
                        text: 'Content with a title field and text shows up like this.The title for this is \'Flashbox content\''
                    }
                ]
            },
            {
                paragraphs:[
                    {
                        text:`Content without a title is rendered like this, without a box.`
                    }
                ]
            },
            {
                title:'This is a title with no paragraphs field.',
                paragraphs:[]
            },
            {
                paragraphs:[
                    {
                        text:`These are paragraphs listed below the titled group without paragraphs. Create lists like this:`
                    },

                    {
                        list:[
                            `Item 1`,
                            `Item 2`,
                            `Item 3`
                        ]
                    },
                    {
                        text:`A link to an internal route can be created like so:`
                    },
                    {
                        internalLink:{
                            label:'Home',
                            component:HomepageComponent,
                            route:''
                        }
                    },
                    {
                        text:`Or by using the route object, if you know where it is in the code`
                    },
                    {
                        internalLink:miscRoutes['pastPhdStudents']
                    }
                ]
            }
        ]
    }
}
export const otherRoutes = dictionaryToRouteList(othersData,'misc/others/',OthersPageComponent)

export function dictionaryToRouteList(dict:{[key:string]:any},basePath:string,component:any):routeSpec[]{
    return Object.keys(dict).map((key,index,[])=>{
        return {
            route:`${basePath}${key}`,
            component:component,
            label:key
        }
    })
}