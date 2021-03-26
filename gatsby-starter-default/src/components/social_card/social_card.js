import React from 'react';

const social_array = [
    {
        title: 'Github',
        link: "",
        logo_cdn_class: ""
    },
    {
        title: 'LinkedIn',
        link: "",
        logo_cdn:""

    }
];
class SocialCard extends React.Component{
    render(){
        
        return(
            <div class = 'container'>
                {
                    social_array.map(
                        social_profile =>(
                            <a href = {social_profile.link} class = {social_profile.logo_cdn}>{social_profile.title}</a>
                        )
                    )
                }
            </div>
        )
        }
}
export default SocialCard