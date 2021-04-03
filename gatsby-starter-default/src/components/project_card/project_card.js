import React from 'react';
import "../layout/layout.scss";

const { Component } =  React;


class ProjectCard extends Component {
    render(){
        const { 
            title,
            description, 
            features,
            stack,
            demonstrated_capabilities
             } = this.props;

        return(
            <div className = "verticalSectionLayout">
                <div className = "card project-preview">
                    <div className = "card-header font-weight-bold">
                        {title}
                    </div>
                    <div className = "card-description">
                        {description}
                    </div>
                    <div className = "card-body text-left">
                        <div className = "card-features">
                            {features}
                        </div>
                        <div className = "tech-stack">
                            {stack}
                        </div>
                        <div className = "card-capabilities">
                            {demonstrated_capabilities}
                        </div>

                    </div>
                </div>

            </div>
        );
        
    }
};
export default ProjectCard