import React from 'react';
const { Component } = React;
import ProjectCard from "../project_card/project_card.js"
import ProjectData from "../data_scripts/projects.js"
class ProjectSection extends Component {
    render(){
        

        return(
            <div class = 'section-container'>Section Container
                {
                   ProjectData.ProjectArray.map(
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
            </div>
            
        )

    }
}
export default ProjectSection