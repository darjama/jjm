import React from "react"
import { Row, Col, Container, ListGroup, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`therapy`, `anger management`, `court evaluation`, `brief therapy`]} />
    <Container className="text-left" >
      <Row>
        <Col>
        <h1 className="text-center">Jennifer Marco, MSW, LCSW</h1>
        </Col>
      </Row>
      <Row className="d-inline-flex flex-wrap justify-content-center">
          <Card style={{ width: '30rem', margin: '1rem' }}>
            <Card.Header as="H3">About Jennifer</Card.Header>
            <Card.Body>
            <Card.Text>Jennifer is a Master's level Licensed Clinical Social Worker with training as a psychotherapist. She specializes in individual and marriage/relationship counseling as well as anger management. Jennifer has over twenty years in the field with a background in community mental heath and private practice. Her private practice serves adolescents, adults, families and the geriatric population.
              <br/>  <br/>
              She has spoken on anxiety disorders, depression and anger management for the Shore Memorial Hospital Wellness Center, Shore Memorial's Annual Women's Conference, as well as several other business and community events in Atlantic County. She also runs a monthly anger management workshop.
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem', margin: '1rem' }}>
            <Card.Header as="H3">Therapeutic Approach</Card.Header>
            <Card.Body>
              <Card.Text>
              The client and therapist are an interactive team that work together to address pertinent issues that have not been resolved in the client's life. A comfortable environment allows each client an opportunity to explore and address areas of stress in their lives.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem', margin: '1rem' }}>
            <Card.Header as="H3">Education</Card.Header>
            <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              Masters Degree in Social Work from University of Pennsylvania
            </ListGroup.Item>
            <ListGroup.Item>
            Undergraduate degree from Montclair State University Majored in English with a minor in Psychology
            </ListGroup.Item>
          </ListGroup>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem', margin: '1rem' }}>
            <Card.Header as="H3">New Clients</Card.Header>
            <Card.Body>
              <Card.Text>
                New clients are welcome to call and talk directly to the therapist. Email <a href="mailto:info@jennifermarco.com">info{`@`}jennifermarco.com</a> or call <a href="tel:+16096539900">(609) 653-9900</a> for more information. Your calls will be returned promptly.
                </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem', margin: '1rem' }}>
            <Card.Header as="H3">Insurance</Card.Header>
            <Card.Body>
              <Card.Text>
                Please note: Jennifer Marco is no longer accepting insurance plans.
              </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
