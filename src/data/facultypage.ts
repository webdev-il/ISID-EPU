import { PersonsData, personsSpec } from "./personspage";

export interface PersonSpec {
    imageLink?: string;
    image: string;
    name: string;
    description: string;
    personPageKey?:string;
}

export interface facultyPageSpecs{
    title:string;
    subtitleForProfs:string;
    professors:PersonSpec[];
    subtitleForStaff:string;
    staff:PersonSpec[];
    
}
export function getSummarizedFacultyList(data:personsSpec):PersonSpec[]{
    return Object.keys(data).map((key)=>({
        name:data[key].name,
        description:data[key].title,
        image:data[key].image,
        personPageKey:key
    }))
}
export const facultyPageData:facultyPageSpecs = {
    title:`Faculty and Staff`,
    subtitleForProfs:`Economics and Planning Unit Faculty Profile`,
    professors:getSummarizedFacultyList(PersonsData),
    subtitleForStaff:`Economics and Planning Unit Staff`,
    staff:[
        {
            image:`assets/people/athisi.jpg`,
            imageLink:`https://www.sciencedirect.com/science/article/pii/S0305750X18302018#!`,
            name:`Athissi Kayina`,
            description:`Research Scientist, EPU <br>
            <a href="https://sites.google.com/site/athisikayina/">Webpage</a>`
        },
        {
            image:`assets/people/ravi.jpg`,
            name:`Ravi`,
            description:`Secretary, EPU`
        }
    ]
}