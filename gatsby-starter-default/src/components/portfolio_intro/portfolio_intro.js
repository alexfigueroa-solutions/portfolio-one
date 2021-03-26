import React from 'react';
import style from './portfolio_intro.scss';
const professional_title_prompt = 'I am a '
const specializations_prompt = 'I specialize in '
class PortfolioIntro extends React.Component{
    render(){
    
        return(
            <div className = {style.container}>
                <div className = {style.professionalTitleContainer}>
                    <h1>{professional_title_prompt} <span class = {style.dynamicProfessionalTitle}>
                        </span></h1>
                </div>
                <div className = {style.specializationsContainer}>
                    <h1>{specializations_prompt} <span class = {style.dynamicSpecialization}>
                        </span></h1>
                </div>
            </div>
        )
    }
}
export default PortfolioIntro
