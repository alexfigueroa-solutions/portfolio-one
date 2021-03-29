import React from 'react';

technologies = [
    {
        title: 'Neo4j',
        description: 'Graph Database',
        category: 'Database',
        use_cases: [
            'Data Modeling',
            'Project Management',
            'Business Management',
            'Deep Learning'
        ],
        logo_cdn_class: '',
        url:''
    }
]

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