import React from 'react';
import "../layout/layout.scss";
import "../general.scss";


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
           
            <div className = "projectCard">
                <div className = "cardTitleDiv">
            
                    <h1 className = "cardTitle">
                        {title}
                    </h1>

                </div>
                <div className = "cardDescriptionDiv">
                    <h4 className = "Label">Description</h4>
                    <h3 className = "labelValue">{description}</h3>
                </div>
                <div className = "cardCollapsibleTree">
                    <div className = "cardFeaturesDiv">
                        <h4 className = "Label">Features</h4>
                        {
                            features.map(
                                feature => (
                                    <div className = 'cardEntryDiv'>
                                        
                                        <h3 className = "cardEntryValue">{feature}</h3>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className = "cardStackDiv">
                        <h4 className = "Label">Stack</h4>
                        {
                            stack.map(
                                stack_entry => (
                                    <div className = 'cardEntryDiv'>
                                        
                                        <h3 className = 'cardEntryValue'>{stack_entry}</h3>
                                    </div>

                                )
                            )
                        }
                    </div>
                    <div className = "cardCapabilitiesDiv">
                        <h4 className = 'Label'>Capabilities Demonstrated</h4>
                        {
                            demonstrated_capabilities.map(
                                demonstrated_capability => (
                                    <div className = 'cardEntryDiv'>
                                        
                                        <h3 className = 'cardEntryValue'>{demonstrated_capability}</h3>
                                    </div>
                                )
                            )
                        }
                    </div>

                </div>
            </div>

            
        );
        
    }
};
export default ProjectCard