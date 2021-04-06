import React from 'react';
import {
    faGithub,
    faLinkedin,
    faMedium
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../general.scss";
const social_array = [
    
    {
        title: 'LinkedIn',
        link: "",
        logo_cdn: faLinkedin

    },
    {
        title: 'Github',
        link: '',
        logo_cdn: faGithub
    },
    {
        title: 'Medium',
        link:"",
        logo_cdn: faMedium
    }
];
class SocialCard extends React.Component{
    render(){
        
        return(
            <div className = 'socialCard'>
                {
                    social_array.map(
                        social_profile =>(
                            <FontAwesomeIcon class = 'socialIcon' href = {social_profile.link} icon = {social_profile.logo_cdn}></FontAwesomeIcon>
                        )
                    )
                }
            </div>
        )
        }
}
export default SocialCard