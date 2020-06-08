import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesOffered = () => (
  <Layout pageInfo={{ pageName: "services-offered" }}>
    <SEO title="Therapy Services Offered" />
    <h1>Services Offered</h1>
    <p>Individual psychotherapy is provided to adolescents and adults by appointment, Monday-Friday. Couples counseling and family therapy are also available. New clients are welcome to call and talk directly to the therapist. Email <a href="mailto:info@jennifermarco.com"> info{'@'}jennifermarco.com</a> or call (609) 653-9900 for more information. Your calls will be returned promptly.</p>
    <p>Psychotherapy can help you addresses the following issues:</p>
    <ul>
      <li>Anxiety</li>
      <li>Panic attacks </li>
      <li>Depressed mood </li>
      <li>Postpartum issues</li>
      <li>Stress management </li>
      <li>Generalized feelings of low self worth and confidence </li>
      <li>Conflicts at work, home, friendship, family </li>
      <li>Grief counseling </li>
      <li>Marriage and relationship </li>
      <li>Gay and lesbian issues </li>
      <li>Anger management </li>
      <li> Health issues </li>
      <li>Generalized feeling of unhappiness or anxiousness</li>
    </ul>
    <h2>Techniques</h2>
    <p>Cognitive Behavioral Therapy and Rational Emotive Therapy allow clients to heighten their ability to <span style={{fontWeight:"bold"}}>regulate</span> intense emotional reactions to stressors while utilizing more <span style={{fontWeight:"bold"}}>rational</span> thinking to address and resolve conflict.  Therapy is always personalized to meet the needs of each client. A confidential place to discuss problems is of the utmost importance.</p>
    <h2>Anger Management</h2>
    <p>A specialized focus in my practice is under the heading of anger management. I work with individual clients, a monthly anger management workshop for court and legal requirements, and mental health evaluations to address areas of  conflict that are problematic due to emotionally charged outbursts.</p>

    <p>Triggers that promote anger are identified and the skills to cope productively are established.</p>

    <p>Our work is to relearn how to recognize and modify our responses to advance our concerns rather than make our reactions the issue.</p>

    <h2>Court {'&'} Legal Evaluations</h2>
    <p>Another area of expertise is writing mental health court/legal evaluations.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesOffered
