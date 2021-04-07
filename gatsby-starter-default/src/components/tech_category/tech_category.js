import React from 'react';
import TechCard from '../tech_card/tech_card.js';
import '../general.scss';
import { faCss3, faHtml5, faJava, faReact, faRProject, faPython } from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const categories = [
    {
        title: 'Front-End',
        tech: [
            {
                title: 'ReactJS',
                description: 'Front-End Web Development Library',
                use_cases: [
                    "Component-Based UI Development"
                ],
                tech_icon: faReact,
                url: ''
            },
            {
               title: 'GatsbyJS',
               description: 'Lightweight Serverless Front-End Web Development Framework',
               use_cases: [
                   'Static Site Development'
               ],
               tech_icon: faTools,
               url: ''
            },
            {
                title: 'D3.js',
                description: 'Front-End 3D Wb Graphics Framework',
                use_cases: [
                    'Data Visualization',
                    'GUI'
                ],
                tech_icon: faTools,
                url:''
            },
            {
                title: 'HTML5',
                description: 'Markdown language for the web.',
                use_cases: [],
                tech_icon: faHtml5,
                url: ''
            },
            {
                title: 'CSS3',
                description: '',
                use_cases: [],
                tech_icon: faCss3,
                url: ""
            },
            {
                title: 'Matplotlib',
                description: 'Data Visualization Python Library',
                use_cases: [],
                tech_icon: faTools,
                url: ''
            }
        ]
    },
    {
        title: 'Back-End',
        tech: [
            {
                title: 'Django',
                description: 'Python Back-End Web Development Framework',
                use_cases:[],
                tech_icons: faTools,
                url:''
            },
            {
                title: 'Selenium',
                description: 'Automated Testing Framework',
                use_cases: [],
                tech_icons: faTools,
                url:''
            },
            {
                title: 'Pandas',
                description:'Data Handling Python Library',
                use_cases: [],
                tech_icon: faTools
                
            }

        ]
    },
    {
        title: 'Databases',
        tech: [
            {
                title: 'Neo4j',
                description: 'Graph Database',
                use_cases: [
                    
                ],
                tech_icon: faTools,
                url:''
            },
            {
                title: 'SQLlite',
                description: 'Relational Database',
                use_cases:[
                    
                ],
                tech_icon:faTools,
                url:""
            },
            {
                title: 'Postgres',
                description: 'Relational Database',
                use_cases:[],
                tech_icon: faTools,
                url: ""
            }
        ]
    },
    {
        title: 'Programming Languages',
        tech: [
            {
                title: "Python",
                description: 'High-Level Object-Oriented Programming Language',
                use_cases:[],
                tech_icon: faPython,
                url: ""
            },
            {
                title: "Java",
                description: 'High-Level Programming Language',
                use_cases:[],
                tech_icon: faJava,
                url:""
            },
            {
                title: 'R',
                description: 'Statistical Programming Language',
                use_cases: [],
                tech_icon: faRProject,
                url:""
            },
            {
                title: 'Javascript',
                description: 'High-Level Programming Lanaguage',
                use_cases:[],
                tech_icon: faTools,
            }
        ]
    }
    

];
 class TechCategory extends React.Component{
     render(){
         return(
             <div className = 'techCategoriesDiv'>
                 {
                    categories.map(
                        category => (
                            <div className = 'techCategoryDiv'>
                                <h4 className = 'categoryLabel'>{category.title}</h4>
                                {
                                    category.tech.map(
                                        tech_entry => (
                                            <TechCard
                                                title = {tech_entry.title}
                                                description = {tech_entry.description}
                                                
                                                use_cases = {tech_entry.use_cases}
                                                tech_icon = {tech_entry.tech_icon}
                                                url = {tech_entry.url}>
                                                Tech Card
                                            </TechCard>
                                        )
                                    )
                                }
                            </div>
                        )
                    )
                }
             </div>
             
         )
     }
 }
export default TechCategory;