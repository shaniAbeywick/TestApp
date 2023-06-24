import React from 'react'
import '../App.css'
import '../styles/header.css'
import { Container, Navbar, Nav } from 'react-bootstrap';

function header() {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/GEL-logo-1.png" alt="GlobalEdulink Logo" class="d-inline-block align-text-top" />
          <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/GEL-logo-2.png" alt="Text GEL Logo" class="d-inline-block align-text-top hide-mobile" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Courses</Nav.Link>
            <Nav.Link href="#link">Awarding bodies</Nav.Link>
            <Nav.Link href="#home">our product</Nav.Link>
            <Nav.Link href="#link">contact</Nav.Link>


          </Nav>
          <Nav className="ms-auto mb-lg-0">
            <Nav.Item >
              <a id="popup1btn" href="#Home" className="btn btn-outline-primary rounded-pill"><i className="fa fa-question-circle"></i> <span>Enquire Now</span></a>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto mb-lg-0">
            <Nav.Item>
              <a className="btn btn-icon" href="#Home" id="searchbtn"><i className="fa fa-search" aria-hidden="true"></i></a>
            </Nav.Item>
            <Nav.Item>
              <a className="drop_wish" href="https://www.globaledulink.co.uk/wishlist" ><span className="fa fa-heart count_wish" ></span></a>
            </Nav.Item>
            <Nav.Item>
              <a id="vbpcartid" href="#Home" className="btn btn-icon vbpcart"><i className="fa fa-shopping-basket"></i></a>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
        <div className='loginDiv'>
          
          <a class="btn btn-link vbplogin" href="javascript:void(0);" id="login-button"><span>Login</span></a>
          <a class="btn btn-info rounded-pill" href="https://www.globaledulink.co.uk/register/"><span>Register</span></a>
        </div>

      </Container>
    </Navbar>

  )
}

export default header
