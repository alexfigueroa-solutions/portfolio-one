import React from 'react';
import TechCard from "../tech_card/tech_card.js";

const technologies = [
    {
        title: 'Neo4j',
        description: 'Graph Database',
        category: 'Databases',
        use_cases: [
            'Data Modeling',
            'Project Management',
            'Business Management',
            'Deep Learning'
        ],
        logo_cdn_class: '',
        url:'',
        
    },
    {
        title: 'SQLlite',
        description: 'Relational Database',
        category: 'Databases',
        use_cases: [
            'Data Modeling',
            'Data Storage',
            'Data Handling'
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'Postgres',
        description: 'Relational Database',
        category: 'Databases',
        use_cases: [
            'Data Modeling',
            'Data Storage',
            'Data Handling'
        ],
        logo_cdn_class: '',
        url:''
    },
    
    {
        title: 'Python',
        description: 'High-Level Object Oriented Programming Language',
        category: 'Programming Languages',
        use_cases: [
            'Robotics',
            'AI',
            'Automation',
            'Data Science'
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'Java',
        description: 'High Level Programming Language',
        category: 'Programming Languages',
        use_cases: [
            'Enterprise Software',
            'Desktop Applications'
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'R',
        description: 'Statistical Programming Language',
        category: 'Programming Languages',
        use_cases: [
            'Data Science'
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'Javascript',
        description: 'High Level Programming Language',
        category: 'Programming Languages',
        use_cases: [
            'Web Applications',
            'Websites',
            'Web Front-End',
            'Web Back-End'
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'Django',
        description: 'Python Back-End Web Development Framework and Templating Engine',
        category: 'Back-End',
        use_cases: [
            ""
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'Selenium',
        description: 'Automated Testing Framework',
        category: 'Back-End',
        use_cases: [
            'Web Scraping',
            'Web Automation',
            'Automated UI Testing'
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'Pandas',
        description: 'Data Handling Python Library',
        category: 'Back-End',
        use_cases: [
            'Data Cleaning' 
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'Matplotlib',
        description: 'Data Visualization Python Library',
        category: 'Front-End',
        use_cases: [
            ""

        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'HTML',
        description: 'Markdown language for the web.',
        category: 'Front-End'
    },
    {
        title: 'CSS',
        description: '',
        category: 'Front-End',
        use_cases: [
            ""

        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'D3.js',
        description: 'Front-End 3D Graphics Framework',
        category: 'Front-End',
        use_cases: [
            'Data Visualization',
            'GUI'
        ],
        logo_cdn_class: '',
        url: ''
    },
    {
        title: 'React',
        description: 'Front-End Web Development Library',
        category: 'Front-End',
        use_cases: [
            ""
        ],
        logo_cdn_class: '',
        url: ''

    },
    {
        title: 'Gatsby',
        description: 'Front-End Serverless Web Development Framework',
        category: 'Front-End',
        use_cases: [
            ""

        ],
        logo_cdn_class: '',
        url: ''
    }
];

class TechSection extends React.Component{
    
    render(){
        
        return(
            <div class = 'container'>
                {
                    technologies.map(
                        technology => (
                            <TechCard
                                title = {technology.title}
                                description = {technology.description}
                                category = {technology.category}
                                use_cases = {technology.use_cases}
                                logo_cdn_class = {technology.logo_cdn_class}
                                url = {technology.url}>
                                Tech Card
                            </TechCard>

                        )
                    )
                }
                
            </div>
        )
    }
}
export default TechSection