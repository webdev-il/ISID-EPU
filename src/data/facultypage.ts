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
export const facultyPageData:facultyPageSpecs = {
    title:`Faculty and Staff`,
    subtitleForProfs:`Economics and Planning Unit Faculty Profile`,
    professors:[
        {
            image:`assets/people/farzana.jpg`,
            name:`Farzana Afridi`,
            description:`Professor <br>
            PhD, University of Michigan<br>`,
            personPageKey:`farzana_afridi`
        },
        {
            name:`Monisankar Bishnu`,
            image:`assets/people/mbishnu.jpg`,
            description:`Associate Professor <br> PhD, Iowa State University`,
            personPageKey:`monisankar_bishnu`
        },
        {
            name:`Chetan Ghate`,
            image:`assets/people/cg.jpg`,
            description:`Professor <br> PhD, Claremont Graduate School <br>`,
            personPageKey:`chetan_ghate`
        },
        {
            name:`Kanishka Kacker`,
            description:`Assistant Professor <br> PhD, University of Maryland`, 
            image:`assets/people/kk.jpg`,
            personPageKey:`kanishka_kracker`
        },
        {
            image:`assets/people/mudit.jpg`,
            name:`Mudit Kapoor`,
            description:`Associate Professor <br> PhD, University of Maryland`,
            personPageKey:`mudit_kapoor`
        },
        {
            name:`Debasis Mishra`,
            description:`Professor <br> PhD, University of Wisconsin, Madison`,
            image:`assets/people/dm.jpg`,
            personPageKey:`debasis_mishra`
        },
        {
            name:`Abhiroop Mukhopadhyay`,
            description:`<b>Head, EPU, </b>Professor <br> PhD, Pennsylvania State University`,
            image:`assets/people/am.jpg`,
            personPageKey:`abhiroop_mukhopadhyay`
        },
        {
            description:`Professor <br>
                        PhD, Cornell University`,
            image:`assets/people/tridip.jpg`,
            name:`Tridip Ray`,
            personPageKey:`tridip_ray`
        },
        {
            description:`Professor <br>
                        PhD, Indian Statistical Institute`,
            image:`assets/people/pro.jpg`,
            name:`Prabal Roy Chowdhury`,
            personPageKey:`prabal_roy_chowdhury`
        },
        {
            description:`Professor <br> PhD, Princeton University`,
            image:`assets/people/asen.jpg`,
            name:`Arunava Sen`,
            personPageKey:`arunava_sen`
        },
        {
            description:`Professor <br>
                        PhD, Harvard University`,
            image:`assets/people/es.jpg`,
            name:`E. Somanathan`,
            personPageKey:`esomanathan`
        }
    ],
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