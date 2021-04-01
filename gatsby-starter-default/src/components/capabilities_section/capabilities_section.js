import React from 'react';
import TabLayout from "../tab_layout/tab_layout.js"

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
    }
]
const automation_capabilities_array = [
    {
        title: 'Data RPA',
        description:""
    },
    {
        title: 'Workflow RPA',
        description: ""

    },
    {
        title: 'Business RPA',
        description: "Automate business processes such as payment handling, invoicing, inventory management, payroll, business data modeling, contract handling, etc."
    }
]
const dev_ops_capabilities_array = [
    {
        title: 'Unit Testing',
        description:""
    },
    {
        title: 'UI Testing',
        description: ""
    },
    {
        title: 'Version Control',
        description: ""
    }
]
const soft_capabilities_array = [
    {
        title: 'Fast Learner',
        description: ""
    },
    {
        title: 'Disciplined Implementation'
    }
]

const capability_content_array= [
    web_dev_capabilities_array,
    database_capabilities_array,
    data_science_capabilities_array,
    automation_capabilities_array,
    dev_ops_capabilities_array,
    soft_capabilities_array

]

class CapabilitySection extends React.Component{
    render(){
        return <div>
            <h1 class = "container-section">
                Capabilities
            </h1>
            <TabLayout
                nav_header_array = {capability_nav_headers_array}
                content_array = {capability_content_array}>

            </TabLayout>

        </div>
    }
}

export default CapabilitySection