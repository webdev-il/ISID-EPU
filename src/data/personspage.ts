import { PersonPageComponent } from "src/app/pages/people/person-page/person-page.component";
import { dictionaryToRouteList, paraSpec } from "./rtl.utils";
export interface publication{
    title:string;
    authors:string[];
    link:string;
    description:string;
    summary?:string;
}
export interface ProfileLinkSpec{
    site:string;
    link:string;
}
export interface personPageSpec{
    name:string;
    image:string;
    description:paraSpec[];
    publications:publication[]
    profileLinks:ProfileLinkSpec[]
}
export type personsSpec = {[key:string]:personPageSpec};

export const PersonsData:personsSpec = {
    arunava_sen:{
        name:`Arunava Sen`,
        image:`assets/people/asen.jpg`,
        description:[
            {
                text:`Arunava Sen is a professor in the Economics and Planning 
                Unit of the Indian Statistical Institute (ISI), Delhi.
                <br>
                He received his PhD from Princeton University in 1987. He joined 
                ISI Delhi in 1988 and has been with ISI ever since. 
                <br>
                Arunava is a recipient of the Infosys Prize in Social Science in 
                2012. He is also a fellow of the Econometric Society, an Economic 
                Theory Fellow, former member of council of Econometric Society, 
                former President of the Society for Social Choice and Welfare. He 
                is an advisory editor of Journal of Mathematical Economics, and 
                associate editor of Social Choice and Welfare, Economic Theory, 
                Review of Economic Design, and Mathematical Social Sciences.
                <br>
                The main areas of research of Arunava are game theory, social 
                choice theory, mechanism design, voting and auction. He teaches 
                courses on microeconomics and game theory at ISI Delhi.
                <br>
                On the occasion of Arunava’s 60th birthday celebrations, there was
                <a href="https://sites.google.com/view/arunava60/">
                a research conference in ISI Delhi
                </a>
                and his students and colleagues made
                <a href="https://youtu.be/IFAE50i-tbk">
                this video about him.
                </a>
                `
            },
        ],
        publications:[
            {
                title:`Local Global Equivalence in Voting Models: A Characterization and Applications`,
                authors:[
                    `Ujjwal Kumar`,
                    `Souvik Roy`,
                    `Sonal Yadav`,
                    `Huaxia Zeng`
                ],
                description:`published in Theoretical Economics, 2021`,
                link:`https://econtheory.org/ojs/index.php/te/article/viewFile/20211195/32375/914#:~:text=It%20is%20locally%20strategy%2Dproof%20if%20the%20voter%20with%20a,gain%20by%20an%20arbitrary%20misrepresentation.`
            },
            {
                title:`Matching with Partners and Projects`,
                authors:[
                    `Antonio Nicolo`,
                    `Sonal Yadav`
                ],
                description:`published in the Journal of Economic Theory, 2019`,
                link:`https://www.sciencedirect.com/science/article/pii/S002205311830214X`
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=iGmVaU4AAAAJ`,
                site:`Google Scholar`
            },
            {
                link:`https://www.linkedin.com/in/arunava-sen-24859918b/?originalSubdomain=in`,
                site:`LinkedIn`
            },
            {
                link:`https://en.wikipedia.org/wiki/Arunava_Sen`,
                site:`Wikipedia`
            },
            {
                link:`https://www.isid.ac.in/~asen/`,
                site:`Personal Site`
            }
        ]
    },
    farzana_afridi:{
        name:'Farzana Afridi',
        image:'assets/people/farzana.jpg',
        description:[
            {
                text:`PhD, University of Michigan<br>
                Area: development economics, labour economics`
            }
        ],
        profileLinks:[
            {
                site:'LinkedIn',
                link:''
            },
            {
                link:'https://www.isid.ac.in/~fafridi/',
                site:`Personal Website`
            }
        ],
        publications:[]
    },
};

export const personRoutes = dictionaryToRouteList(PersonsData,'people/individual/',PersonPageComponent)