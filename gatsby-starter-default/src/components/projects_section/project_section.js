import React from 'react';
import ProjectCard from "../project_card/project_card.js"
import "../general.scss";



const ProjectArray = [
    {
        title: 'E-Commerce Web Application',
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
            'D3.js',
            'Stripe Payment Portal',
            'Git',
            'Github',
            'Heroku',
            'Docker',
            'Selenium'
        ],
        demonstrated_capabilities: [
            'Handle a full software development lifecycle using web technologies.',
            "Design, architect, and develop a technical solution to a client's problem.",
            "Handle e-commerce payment processing using the Stripe Payment Portal.",
            "Employ version control using Git and Github.",
            "Automat UI/UX testing using Selenium.",
            "Automate CRUD unit testing using Python.",
            "Automate development operations using Python's os module.",
            "Design and develop a clean, responsive front-end UI, using ReactJS, VanillaJS, and other front-end technologies.",
            "Create a content management system (CMS) using custom CRUD operations developed in Python.",
            "Create and implement a database using Postgres and Django's ORM (Object Relational Mapper).",
            "Implement styling using SCSS.",
            "Deploy to Heroku server."
        ],
        repo: "https://github.com/cybrvybe/beatcommerce-web-app",
        url:""
    },
    
    {
        title: "Software Development Portfolio",
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
            'Design, develop, and create lightweight static sites, while still leveraging modern powerful tools.',
            'Implement styling using SCSS.',
            'Deploy to Github Pages',
            'Develop front-end React components.'
        ],
        repo: "https://github.com/cybrvybe/cybrvybe.github.io",
        url: "cybrvybe.github.io"
    },
    {
        title: 'AU70MA7A v.0',
        description: 'Graph Data Modeling and Management Platform',
        features: [
            'Project Modeling and Management',
            'Professional Profile Modeling and Management',
            'Life Event Modeling and Management',
            'Personal Financial Modeling and Management',
            'Business Modeling and Management',
            'Terminal CLI'
        ],
        stack: [
            'Python',
            'Neo4j'
        ],
        demonstrated_capabilities: [
            'Design and begin to develop a software platform.',
            'Create and act on ideas.',
            'Model data using graph databases.',
            'Decompose systems in business, professional, and personal spheres to their component variables.',
            'Develop CRUD operations for custom data models in a graph databases.'
        ],
        repo: 'https://github.com/cybrvybe/AU70MA7A-v.0',
        url: ""
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
            'Manipulate VSCode environment via JSON file editing.',
            'Deploy VSCode theme to VSCode Marketplace.'
        ],
        repo: "",
        url: ""
    },
    
    {
        title: 'QvQ: Data Cleaning Tool',
        description: 'Split Datasets into Quantitative and Qualitative parts.',
        features: [
            'Terminal CLI'
        ],
        stack: [
            'Python',
            'Pandas',
            'CSV Data'
        ],
        demonstrated_capabilities: [
            'Automate data processes with code.',
            'Manipulate data using Pandas and Python.',
            'Handle CSV files.'
        ],
        repo: "",
        url: ""

    }
    ]
    
    
class ProjectSection extends React.Component {
    render(){
        

        return <div className = "projectSectionContainer">
                    {
                    ProjectArray.map(
                        project => (
                            <ProjectCard  
                                title = {project.title}
                                description = {project.description}
                                features = {project.features}
                                stack = {project.stack}
                                demonstrated_capabilities = {project.demonstrated_capabilities}
                                github_repo_url = {project.repo}
                                >
                            </ProjectCard>
                            )
                        ) 
                    }
                </div>;
            
        

    }
}
export default ProjectSection