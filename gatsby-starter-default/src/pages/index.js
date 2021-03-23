import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ProjectSection from "../components/projects_section/project_section.js"
import CapabilitySection from "../components/capabilities_section/capabilities_section.js"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <ProjectSection>
        Project Section
    </ProjectSection>
    <CapabilitySection>
        Capabilities Section
    </CapabilitySection>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
