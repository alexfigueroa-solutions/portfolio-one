import React from "react"




import SEO from "../components/seo"
import ProjectSection from "../components/projects_section/project_section.js"
import CapabilitySection from "../components/capabilities_section/capabilities_section.js"
import ProfileSection from "../components/profile_section/profile_section.js"
import TechSection from "../components/tech_section/tech_section.js"
import "./index.scss"

const IndexPage = () => (


  <div>
    
    
    <SEO title="Home" />
    <h1 className = 'divider'>
      Profile
    </h1>
    <ProfileSection>
      
    </ProfileSection>
    <h1 className = 'divider'>
      Projects
    </h1>
    <ProjectSection>
      
    </ProjectSection>
    <h1 className = 'divider'>
      Capabilities
    </h1>
    <CapabilitySection>
       
    </CapabilitySection>
    <h1 className = 'divider'>
      Skills and Technologies
    </h1>
    <TechSection 
     
      >
     
    </TechSection>
  </div>
)

export default IndexPage
