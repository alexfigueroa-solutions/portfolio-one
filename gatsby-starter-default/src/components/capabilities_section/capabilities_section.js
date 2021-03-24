import React from 'react';
import TabLayout from "../tab_layout/tab_layout.js"

const CapabilityHeadersArray = [
    'Web Development',
    'Database',
    'Data Science',
    'Automation',
    'DevOps',
    'Soft'
]


const capabilities_array = [
    {
        title: 'UI Design',
        header: CapabilityHeadersArray[5],
            },
    {
        title: 'UI Development',
        header: CapabilityHeadersArray[5],
        description: 'Creates smooth, responsive, and dynamic UIs using various modern web technologies and frameworks.'
    },
    {
        title: 'ORM Data Modeling',
        header: CapabilityHeadersArray[1],
        description: 'Implements Object Relational Mapping (ORM) to model business and personal data effectively.'
    },
    

]
web_dev_capabilities_array = [
    {
        title: 'UI Design',
        description: 'Employs a holistic approach by using a component-based UI design process.'
    },
    
]
database_capabilities_array = [
    {
        title: 'Graph Databases',
        description: 'Implements graph databases to enhance general understanding of business data, as well as to safely, and efficiently, accumulate data - a massively proliferating, valuable asset in the 21st Century.'
    },
    {

    }
]
data_science_capabilities_array = [
    {
        title: '',
        description: ""
    },
    {

    }
]
automation_capabilities_array = [
    {
        title: '',
        description:""
    },
    {

    }
]
dev_ops_capabilities_array = [
    {
        title: '',
        description:""
    },
    {

    }
]
soft_capabilities_array = [
    {
        title: '',
        description: ""
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
        return <div class = "container">
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