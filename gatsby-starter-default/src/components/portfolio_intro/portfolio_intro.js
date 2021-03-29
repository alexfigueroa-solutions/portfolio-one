import React from 'react';
import styles from './portfolio_intro.scss';
const professional_title_prompt = 'I am a '
const specializations_prompt = 'I specialize in '
class PortfolioIntro extends React.Component{
    render(){
    
        return(
            <div className = {styles.container}>
                <div className = {styles.professionalTitleContainer}>
                    <h1>{professional_title_prompt} <span class = {styles.dynamicProfessionalTitle}>
                        </span></h1>
                </div>
                <div className = {styles.specializationsContainer}>
                    <h1>{specializations_prompt} <span class = {styles.dynamicSpecialization}>
                        </span></h1>
                </div>
            </div>
        )
    }
}
export default PortfolioIntro
