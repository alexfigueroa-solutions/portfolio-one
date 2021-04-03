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
    <ProfileSection>
      Profile Section
    </ProfileSection>
    <ProjectSection>
        Project Section
    </ProjectSection>
    <CapabilitySection>
        Capabilities Section
    </CapabilitySection>
    <TechSection 
     
      >
        Tech Section
    </TechSection>
  </div>
)

export default IndexPage
