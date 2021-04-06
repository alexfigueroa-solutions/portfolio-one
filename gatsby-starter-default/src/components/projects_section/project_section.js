import React from 'react';
import ProjectCard from "../project_card/project_card.js"
import "../layout/layout.scss";



const ProjectArray = [
    {
        title: 'FactorBeats Web Application',
        description: 'Digital Audio Asset E-Commerce Site',
        features: [
            'E-Commerce Checkout',
            'Payment Processing Handling',
            'Administrative Data Analytics Dashboard',
            'Custom Content Management System',
            'Digital Audio Asset E-Commerce Store',
            'Audio Playback',
            'Video Playback'
        ],
        stack: [
            'Django',
            'Python',
            'Javascript',
            'AJAX',
            'ReactJS',
            'HTML5',
            'SCSS',
            'JQuery',
            'Postgres',
            'D3.json',
            'Stripe Payment Portal',
            'Git',
            'Github',
            'Heroku',
            'Docker',
            'Selenium'
        ],
        demonstrated_capabilities: [
            'Handled a full software development lifecycle using web technologies.',
            "Designed, architected, and developed a technical solution to a client's problem.",
            "Handled e-commerce payment processing using the Stripe Payment Portal.",
            "Employed version control using Git and Github.",
            "Automated UI/UX testing using Selenium.",
            "Automated CRUD testing using Python.",
            "Automated development operations using Python's os module.",
            "Designed and developed a clean, responsive front-end UI, using ReactJS, VanillaJS, and other front-end technologies.",
            "Created a content management system (CMS) using custom CRUD operations developed in Python.",
            "Created and implemented a database using Postgres and Django's ORM (Object Relational Mapper).",
            "Implemented styling using SCSS.",
            "Deployed to Heroku server in a Docker container."
        ]
    },
    {
        title: 'DJANGAU70 Python Library',
        description: 'Automation Tools for Django',
        features: [
            'Django Project Template',
            'Django Workflow Automation Tools',
            'DevOps Automation Tools',
            'CLI'
        ],
        
        stack: [
            'Django',
            'Python',
            'Heroku',
            'Selenium',
            'Git',
            'Github',
            'Postgres'
        ],
        demonstrated_capabilities: [
            'Automation of DevOps workflows.',
            'Automation of Django workflows.',
            'Reduction in technical debt and overhead for future projects.',
            'Increase in workload efficiency and productivity for future projects.'
        ]
    
    },
    {
        title: "Full-Stack Web Development Portfolio",
        description: "Static GatsbyJS Site",
        features: [
            'Professional Profile',
            'Project Showcasing',
            'Skills and Capabilities',
            'Technologies',
            'Contact'
        ],
        stack: [
            'ReactJS',
            'Prismic',
            'GatsbyJS',
            'VanillaJS',
            'HTML5',
            'SCSS',
            'GraphQL'
        ],
        demonstrated_capabilities: [
            'Design, development, and creation of lightweight static sites, while still leveraging modern powerful tools.',
            'Implementation of styling using SCSS.',
            'Deployment to Github Pages',
            'DOM Manipulation with Javascript.'
        ]
    },
    {
        title: 'Neo VSCode Theme',
        description:'Visual Studio Code Theme',
        features: [
            'Matrix-inspired theme in Visual Studio Code',
            'Available on VSCode Marketplace.'
        ],
        stack:[
            'JSON'
        ],
        demonstrated_capabilities: [
            'Manipulation of VSCode environment via JSON file editing.',
            'Deploying VSCode theme to VSCode Marketplace.'
        ]
    }
    ]
    
    
class ProjectSection extends React.Component {
    render(){
        

        return <div className = "horizontalSectionLayout">Section Container
                    {
                    ProjectArray.map(
                        project => (
                            <ProjectCard  
                                title = {project.title}
                                description = {project.description}
                                features = {project.features}
                                stack = {project.stack}
                                demonstrated_capabilities = {project.demonstrated_capabilities}>
                            </ProjectCard>
                            )
                        ) 
                    }
                </div>;
            
        

    }
}
export default ProjectSection