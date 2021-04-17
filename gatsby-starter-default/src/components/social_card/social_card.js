import React from 'react';
import {
    faGithub,
    faLinkedin,
    faMedium
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../general.scss";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const social_array = [
    
    {
        title: 'LinkedIn',
        link: "https://www.linkedin.com/in/alejandro-figueroa-206596198/",
        logo_cdn: faLinkedin

    },
    {
        title: 'Github',
        link: 'https://github.com/cybrvybe',
        logo_cdn: faGithub
    },
    {
        title: 'Medium',
        link:"",
        logo_cdn: faMedium
    },
    {
        title: 'Email',
        link:"mailto: alexfigueroa.cybr@gmail.com",
        logo_cdn: faEnvelope
    }
];
class SocialCard extends React.Component{
    render(){
        
        return(
            <div className = 'socialCard'>
                {
                    social_array.map(
                        social_profile =>(
                            <a href = {social_profile.link}>
                                <FontAwesomeIcon className = 'socialIcon' icon = {social_profile.logo_cdn}></FontAwesomeIcon>
                            </a>
                                                    )
                    )
                }
            </div>
        )
        }
}
export default SocialCard