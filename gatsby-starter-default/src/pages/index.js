import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ProjectSection from "../components/projects_section/project_section.js"
import CapabilitySection from "../components/capabilities_section/capabilities_section.js"
import ProfileSection from "../components/profile_section/profile_section.js"
import TechSection from "../components/tech_section/tech_section.js"
import style from "./index.scss"

const IndexPage = () => (
  <Layout className = {style.main}>
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

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
