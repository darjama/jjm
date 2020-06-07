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
          <p>
Jennifer is a Master's level Licensed Clinical Social Worker with training as a psychotherapist. She specializes in individual and marriage/relationship counseling as well as anger management. Jennifer has over twenty years in the field with a background in community mental heath and private practice. Her private practice serves adolescents, adults, families and the geriatric population.
          </p>
          <p>
She has spoken on anxiety disorders, depression and anger management for the Shore Memorial Hospital Wellness Center, Shore Memorial's Annual Women's Conference, as well as several other business and community events in Atlantic County. She also runs a monthly anger management workshop.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
          <p>
            For more documentation on these packages and how they work, please
            refer to the pages linked in the list above.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
