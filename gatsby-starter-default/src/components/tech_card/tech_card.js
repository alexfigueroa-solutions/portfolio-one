import React from 'react';
import "../general.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TechCard extends React.Component{
    render(){
        const {
            title,
            
            tech_icon,
            url
        } = this.props;
        return(
            <div class = "techCard">
                <div className = 'textLogoDiv'>
                    <FontAwesomeIcon href = {url} icon = {tech_icon}></FontAwesomeIcon>
                    <h1 className = 'labelValueTwo'>{title}</h1>
                </div>
                
               
                
                
                
            </div>
        )
    }
}
export default TechCard