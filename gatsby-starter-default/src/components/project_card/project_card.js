import React from 'react';
import "../layout/layout.scss";
import "./project_card.scss";

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
                <div className = "projectCard">
                    <div className = "projectCardTitle">
                
                        <h1 className = "labelResponse">
                            {title}
                        </h1>

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