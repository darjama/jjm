import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AngerManagement = () => (
  <Layout pageInfo={{ pageName: "anger-management" }}>
    <SEO title="Anger Management" />
    <h1>Anger Management {'&'} Anger Management Workshops</h1>
    <p>A specialized focus in my practice is under the heading of anger management. I work with individual clients, a monthly anger management workshop for court and legal requirements, and mental health evaluations to address areas of  conflict that are problematic due to emotionally charged outbursts.</p>
    <p>Triggers that promote anger are identified and the skills to cope productively are established.</p>
    <p>Our work is to relearn how to recognize and modify our responses to advance our concerns rather than make our reactions the issue.</p>

    <p>Email <a href="mailto:info@jennifermarco.com"> info{'@'}jennifermarco.com</a> or call <a href="tel:+16096539900">(609) 653-9900</a> for more information.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AngerManagement
