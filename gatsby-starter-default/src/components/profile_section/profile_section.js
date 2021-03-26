import React from 'react';
import ProfileCard from "../profile_card/profile_card.js"
import SocialCard from "../social_card/social_card.js"
import PortfolioIntro from "../portfolio_intro/portfolio_intro.js"
/*
const professional_titles_list = [
    'Software Developer',
    'Web Developer',
    'Full-Stack Developer',
    'Data Engineer',
    'Programmer',
    'Lifelong Learner'
]
const specializations_list = [
    'Web Development',
    'Intelligent Automation (RPA + AI)',
    'E-Commerce',
    'Data Management',
    'Data Science',
    'Mathematics',
    'Physics'
]
*/


class ProfileSection extends React.Component{
    render(){
        return(
            <div class = 'profile-section'>
                <PortfolioIntro>
                    Portfolio Intro
                </PortfolioIntro>
                <ProfileCard
                    >
                    Profile Card
                </ProfileCard>
                <SocialCard
                    >
                    Social Card
                </SocialCard>
            </div>
        )
    }

}
export default ProfileSection