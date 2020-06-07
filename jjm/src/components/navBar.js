import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/about-me" className="link-no-style">
              <Nav.Link as="span" eventKey="about-me">
                About Me
              </Nav.Link>
            </Link>
            <Link to="/services-offered" className="link-no-style">
              <Nav.Link as="span" eventKey="services-offered">
                Services Offered
              </Nav.Link>
            </Link>
            <Link to="/anger-management" className="link-no-style">
              <Nav.Link as="span" eventKey="anger-management">
                Anger Management
              </Nav.Link>
            </Link>
            <Link to="/contact-me" className="link-no-style">
              <Nav.Link as="span" eventKey="contact-me">
                Contact Me
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
