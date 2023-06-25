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
            imageLink:`https://www.isid.ac.in/~fafridi/`,
            name:`Farzana Afridi`,
            description:`Professor <br>
            PhD, University of Michigan<br>
            Area: development economics, labour economics<br>
            <a href="https://www.isid.ac.in/~fafridi/">Webpage</a>`
        },
        {
            name:`Monisankar Bishnu`,
            image:`assets/people/mbishnu.jpg`,
            imageLink:`https://www.isid.ac.in/~mbishnu/`,
            description:`Associate Professor <br> PhD, Iowa State University <br> Area: public finance, macroeconomics, growth and development<br>
            <a href="https://www.isid.ac.in/~mbishnu/">Webpage</a>`
        },
        {
            name:`Chetan Ghate`,
            image:`assets/people/cg.jpg`,
            imageLink:`https://www.isid.ac.in/~cghate/`,
            description:`Professor <br> PhD, Claremont Graduate School <br> Area: macroeconomics, monetary economics, macroeconomic development<br>
            <a href="https://www.isid.ac.in/~cghate/">Webpage</a>`
        },
        {
            name:`Kanishka Kacker`,
            description:`Assistant Professor <br> PhD, University of Maryland <br> Area: energy and environment, industrial organization, institutions and economic development<br>
            <a href="https://kanishkakacker.wixsite.com/mysite">Webpage</a>`,
            image:`assets/people/kk.jpg`,
        },
        {
            image:`assets/people/mudit.jpg`,
            name:`Mudit Kapoor`,
            imageLink:`https://www.muditkapoor.org`,
            description:`Associate Professor <br> PhD, University of Maryland <br>
                        Area: health economics, political economy, econometrics<br>
                        <a href="https://www.muditkapoor.org">Webpage</a>`,
        },
        {
            description:`Professor <br> PhD, University of Wisconsin, Madison <br>
                        Area: mechanism design, auction theory, social choice theory <br> <a href="http://www.isid.ac.in/~dmishra">Webpage</a>`,
            image:`assets/people/dm.jpg`,
            name:`Debasis Mishra`,
            imageLink:`http://www.isid.ac.in/~dmishra`
        },
        {
            description:`<b>Head, EPU, </b>Professor <br> PhD, Pennsylvania State University <br>
                        Area: development Economics (empirical), human capital, public policy<br>
                        <a href="https://sites.google.com/view/abhiroop">Webpage</a>`,
            image:`assets/people/am.jpg`,
            name:`Abhiroop Mukhopadhyay`,
            imageLink:`https://sites.google.com/view/abhiroop`
        },
        {
            description:`Professor <br>
                        PhD, Cornell University <br> Area: economic development and growth, applied microeconomics, financial development <br>
                        <a href="https://www.isid.ac.in/~tridip/">Webpage</a>`,
            image:`assets/people/tridip.jpg`,
            name:`Tridip Ray`,
            imageLink:`https://www.isid.ac.in/~tridip/`
        },
        {
            description:`Professor <br>
                        PhD, Indian Statistical Institute <br> Area: game theory, industrial organization, bargaining, development economics <br>
                        <a href="https://www.isid.ac.in/~prabalrc/">Webpage</a>`,
            image:`assets/people/pro.jpg`,
            name:`Prabal Roy Chowdhury`,
            imageLink:`https://www.isid.ac.in/~prabalrc/`
        },
        {
            description:`Professor <br> PhD, Princeton University <br>
                        Area: social choice theory, mechanism design, voting, auction theory<br>
                        <a href="http://www.isid.ac.in/~asen">Webpage</a>`,
            image:`assets/people/asen.jpg`,
            name:`Arunava Sen`,
            imageLink:`http://www.isid.ac.in/~asen`,
            personPageKey:`arunava_sen`
        },
        {
            description:`Professor <br>
                        PhD, Harvard University <br> Area: environment economics, development economics, evolutionary models of behavior <br>
                        <a href="http:www.isid.ac.in/~som">Webpage</a>`,
            image:`assets/people/es.jpg`,
            name:`E. Somanathan`,
            imageLink:`http:www.isid.ac.in/~som`
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