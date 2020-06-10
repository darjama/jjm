import React from "react"
import { Link } from "gatsby"
import {Button} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMe = () => (
  <Layout pageInfo={{ pageName: "contact-me" }}>
    <SEO title="Contact Therapist Jennifer Marco" />
    <h1>Contact Me</h1>
    <p><br/></p>
    <Button variant="primary" size="lg" block
      onClick={() => window.open("mailto:info@jennifermarco.com")}>
      info{`@`}jennifermarco.com
    </Button>
    <Button variant="secondary" size="lg" block
      onClick={() => window.open("tel:+16096539900")}>
      (609) 653-9900
    </Button>
    <p><br/></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactMe
