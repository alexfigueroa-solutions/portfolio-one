import React from 'react';
import TabLayout from "../tab_layout/tab_layout.js"
import "../general.scss";
const capability_nav_headers_array = [
    'Web Development',
    'Database',
    'Data Science',
    'Automation',
    'DevOps',
    'Soft'
]

const web_dev_capabilities_array = [
    {
        title: 'UI Design',
        description: 'Employs a holistic approach by using a component-based UI design process.'
    },
    {
        title: 'UI Development',
        description: 'Creates smooth, responsive, and dynamic UIs using various modern web technologies and frameworks.'
    },
    {
        title: 'Back-End Development',
        description: 'Able to leverage code to create valuable features on the server-side of the web.'
    },
    {
        title: 'Front-End Development',
        description: 'Able to leverage code to create valuable experiences on the clien-side of the web.'
    }

    
]
const database_capabilities_array = [
    {
        title: 'Graph Databases',
        description: 'Implements graph databases to enhance general understanding of business data, as well as to safely, and efficiently, accumulate data - a massively proliferating, valuable asset in the 21st Century.'
    },
    {
        title: 'ORM Data Modeling',
        description: 'Implements Object Relational Mapping (ORM) to model business and personal data effectively.'
    }
]
const data_science_capabilities_array = [
    {
        title: 'Quantitative Analysis',
        description: "Implements quantitative statistical techniques to extract insight from data."
    },
    {
        title: 'Qualitative Analysis',
        description: 'Implements qualitative statistical techniques to extract insight from data.'
    },
    {
        title: 'Data Visualization',
        description: 'Able to implement data visualizations to convey potent information extracted from data.'
    }
]
const automation_capabilities_array = [
    {
        title: 'Data RPA',
        description:"Automate data processes such as, but not limited to: data collection, data cleaning, data manipulation, data reporting, etc."
    },
    {
        title: 'Workflow RPA',
        description: "Automate workflow processes with code, such as project management, time management, etc."

    },
    {
        title: 'Business RPA',
        description: "Automate business processes such as payment handling, invoicing, inventory management, payroll, business data modeling, contract handling, etc."
    }
]
const dev_ops_capabilities_array = [
    {
        title: 'UI Testing',
        description: "Implements Selenium as automated tests to test UI/UX."
    },
    {
        title: 'Version Control',
        description: "Manage and maintain versions via branching, git operations, etc. "
    }
]

const capability_content_array= [
    web_dev_capabilities_array,
    database_capabilities_array,
    data_science_capabilities_array,
    automation_capabilities_array,
    dev_ops_capabilities_array

]

class CapabilitySection extends React.Component{
    render(){
        return <div>
            
            <TabLayout
                nav_header_array = {capability_nav_headers_array}
                content_array = {capability_content_array}>

            </TabLayout>

        </div>
    }
}

export default CapabilitySection