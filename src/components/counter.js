import React from 'react'
import '../App.css'
import '../styles/counter.css'
import { Container,Row,Col } from 'react-bootstrap'

function counter() {
  return (
    <section class="counter__area">
        <Container>
            <Row className="m-0">
                <Col lg={3} md={6} sm={6} col={6} className="p-0">
                    <div class="counterr">
                        <div class="count-title">
                            <h2 class="" data-to="10" data-speed="1500">10</h2>+
                        </div>
                        <p class="count-text">Years of Experience</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} col={6} className="p-0">
                    <div class="counterr">
                        <div class="count-title">
                            <h2 class="" data-to="900" data-speed="1500">900</h2>+
                        </div>
                        <p class="count-text">Online Courses</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} col={6} className="p-0">
                    <div class="counterr">
                        <div class="count-title">
                            <h2 class="" data-to="480000" data-speed="1600">480,000</h2>+
                        </div>
                        <p class="count-text">Happy Learners</p>
                    </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} col={6} className="p-0">
                    <div class="counterr">
                        <div class="count-title">
                            <h2 class="" data-to="150" data-speed="1500">150</h2>+
                        </div>
                        <p class="count-text">Expert Instructors</p>
                    </div>
                    </Col>
            </Row>
            </Container>
    </section>
  )
}

export default counter
