import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`therapy`, `anger management`, `court evaluation`, `brief therapy`]} />
    <Container className="text-center">
      <Row>
        <Col>
        <h2>Jennifer Marco, MSW, LCSW</h2>
        </Col>

      </Row>
      <Row>
        <Col>

          <p>
Jennifer is a Master's level Licensed Clinical Social Worker with training as a psychotherapist. She specializes in individual and marriage/relationship counseling as well as anger management. Jennifer has over twenty years in the field with a background in community mental heath and private practice. Her private practice serves adolescents, adults, families and the geriatric population.
          </p>
        </Col>
        <Col>
          <p>
She has spoken on anxiety disorders, depression and anger management for the Shore Memorial Hospital Wellness Center, Shore Memorial's Annual Women's Conference, as well as several other business and community events in Atlantic County. She also runs a monthly anger management workshop.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <h3>Education</h3>
          <ListGroup>
            <ListGroup.Item>
            Undergraduate degree from Montclair State University Majored in English with a minor in Psychology
            </ListGroup.Item>
            <ListGroup.Item>
              Masters Degree in Social Work from University of Pennsylvania
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
        <h3>Therapeutic Approach</h3>
        <p>
        The client and therapist are an interactive team that work together to address pertinent issues that have not been resolved in the client's life. A comfortable environment allows each client an opportunity to explore and address areas of stress in their lives.
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>New Clients</h3>
          <p>
New clients are welcome to call and talk directly to the therapist. Email <a href="mailto://info@jennifermarco.com">info{`@`}jennifermarco.com</a> or call <a href="tel:+16096539900">(609) 653-9900</a> for more information. Your calls will be returned promptly.
          </p>
        </Col>
        <Col>
          <h3>Insurance</h3>
          <p>
          Please note: Jennifer Marco is no longer accepting insurance plans.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
