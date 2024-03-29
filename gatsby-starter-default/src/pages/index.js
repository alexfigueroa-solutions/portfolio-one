import React from "react"
import {Element} from 'react-scroll';



import SEO from "../components/seo"
import ProjectSection from "../components/projects_section/project_section.js"
import CapabilitySection from "../components/capabilities_section/capabilities_section.js"
import ProfileSection from "../components/profile_section/profile_section.js"
import TechSection from "../components/tech_section/tech_section.js"
import "./index.scss"
import NavBar from "../components/nav/nav.js";

const nav_entries = [
  {
    title: 'Profile',
    href: 'ProfileSection'
  
  },
  {
    title: 'Projects',
    href: 'ProjectSection'
   
  },
  {
    title: 'Capabilities',
    href: 'CapabilitySection'
   
  },
  {
    title: 'Tech',
    href: 'TechSection'
    
  }
];
const IndexPage = () => (


  <div className ='divWrapper'>
    
    
    <SEO title="Home" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <NavBar nav_entries = {nav_entries}>

    </NavBar>
    <Element id = "ProfileSection" name = "ProfileSection">
      <h1 className = 'divider' id = 'profileDivider'>Profile</h1>
      <ProfileSection >
        
      </ProfileSection>
    </Element>
    
    <Element id = "ProjectSection" name = "ProjectSection">
      <h1 className = 'divider'>Projects</h1>
      <ProjectSection>
        
      </ProjectSection>
    </Element>
    
    <Element id = "CapabilitySection" name = "CapabilitySection">
      <h1 className = 'divider'>Capabilities</h1>
      <CapabilitySection>
        
      </CapabilitySection>
    </Element>

    <Element id = "TechSection" name = "TechSection">
      <h1 className = 'divider'>Tech</h1>
      <TechSection>
      
      </TechSection>
    </Element>
    
    
  </div>
)

export default IndexPage
