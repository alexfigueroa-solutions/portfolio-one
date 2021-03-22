import React from 'react';
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
            <div className = "col-12 col-md-4 mb-4">
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