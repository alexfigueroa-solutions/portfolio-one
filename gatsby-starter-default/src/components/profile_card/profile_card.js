import React from 'react';
import '../general.scss';
import '../layout/layout.scss';
import SocialCard from "../social_card/social_card.js";
import { 
    faBusinessTime,
    faBookReader,
    faDatabase,
    faCogs,
    faSlidersH,
    faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextChanger from "../text_changer/text_changer.js";
const profile_array = [
    {
        label: 'First Name',
        value: 'Alejandro'
    },
    {
        label: 'Last Name',
        value: 'Figueroa'
    }
    
];
const technical_traits = [
    {
        title: 'Long-Term Player',
        icon_class: faBusinessTime,
        description: 'I play a long-term hand in life, and focus on delivering long-lasting results.'
    },
    {
        title: 'Knowledge Seeker',
        icon_class: faBookReader,
        description: 'I continuously seek more effective (and efficient) techniques and technologies - while keeping up to date with emerging technological trends.'
    },
    {
        title: 'Process-Oriented',
        icon_class: faCogs,
        description: 'I actively focus on creating and implementing processes to make my work more productive and build momentum more easily.'
    },
    {
        title: 'Data-Driven',
        icon_class:faDatabase,
        description: "I primarily develop projects around an understanding of the data and how will it will flow through the system."
    },
    {
        title: 'Optimization-Oriented',
        icon_class: faSlidersH,
        description: 'I focus on optimizing systems when planning and implementing processes.'
    },
    {
        title: 'Growth Mindset',
        icon_class:faBrain,
        description: 'I believe that anybody is capable of learning anything - as long as you take initiative and put in the energy and time.'
    }
];
const specializations_array = [
    'Web Development',
    'Data Engineering',
    'Process Automation'
]
const bio_array = [
    {
        label: 'What I Do',
        value: 'I apply technical and creative software solutions to business problems. I specialize in: '
    },
    {
        label: 'Who Am I',
        value: "I'm a software developer with a strong background in self-education through exploration and iteration. I've developed my passion for software development ancillary to my passion for mathematics. "
    },
    {
        label: 'What Is My Mission',
        value: 'Complexity in mathematics is expressed in much of the problems - and beauty - in reality. My ultimate goal in life is to simplify complexity - or to organize chaos - in the real world, through technical means.'
    }
];
class ProfileCard extends React.Component{
    render(){
        
        return(
            <div className = 'profileDashboard'>
                <header>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    </link>
                </header>
                
                <div className = 'horizontalSectionLayout'>
                    <div className = 'profileRow'>
                        <div className = 'basicProfileInfoLayout'>
                            {
                                profile_array.map(
                                    profile_obj =>(
                                        <div className = 'basicProfileInfoContainer'>
                                            
                                            <h3 className = 'Label'>{profile_obj.label}</h3>
                                            <h2 className = 'labelValue'>{profile_obj.value}</h2>
                                            
                                            
                                        </div>
                                    )
                                )
                            }
                            <SocialCard>
                            Social Card
                            </SocialCard>
                        </div>
                        <div className = 'bioProfileLayout'>
                        {
                            bio_array.map(
                                bio =>(
                                    <div className = 'bioProfileCard'>
                                        <h3 className = 'Label'>
                                            {bio.label}
                                        </h3>
                                        <h2 className = 'labelValue'>
                                            {bio.value}
                                        </h2>
                                        {
                                                bio.label === 'What I Do' &&(
                                                        <TextChanger text_array = {specializations_array}></TextChanger>
                                                    )
                                               
                                            }
                                                                            </div>
                                )
                            )
                        }
                        </div>
                    </div>
                    <div className = 'technicalTraitsContainer'>
                        {
                            technical_traits.map(
                                technical_trait => (
                                    <div className = "technicalTraitProfileCard">
                                        <FontAwesomeIcon className = 'techTraitIcon' icon = {technical_trait.icon_class}></FontAwesomeIcon>
                                        <h2 className = "Label">
                                            {technical_trait.title}
                                        </h2>
                                        <h2 className = "labelValue">
                                            {technical_trait.description}
                                        </h2>
                                    </div>
                                )
                            )
                        }
                    </div>
                    
                </div>
                
                
            </div>
        )
    }
}
export default ProfileCard