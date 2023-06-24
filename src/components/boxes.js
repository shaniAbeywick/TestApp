import React from 'react'
import '../styles/boxes.css'
import { Container,Row ,Col } from 'react-bootstrap'

function boxes() {
  return (
    <section className="boxes__links">
        <Container>
            <Row className="m-0">
                <Col lg={6} md={6} sm={12} className="p-0">
                    <div className="links__boxDiv" style={{backgroundImage:"url('https://www.globaledulink.co.uk/wp-content/uploads/2022/05/Global-Edulink-Free-Courses.jpg')"}}>


                        <div className="content">
                            <h3>Amazing Free Courses</h3>
                            <p>Our Free Course page is packed full of exciting courses you can access for free. Gain an accredited UK qualification and save a ton. Visit our Free Course page to find out more.</p>
                            <a href="/free-courses/" className="btn btn-outline-primary rounded-pill">Start Now</a>
                        </div>
                        <div className="overly bg-gradient"></div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-0">
                    <div className="links__boxDiv" style={{backgroundImage:"url('https://www.globaledulink.co.uk/wp-content/uploads/2021/10/Global-Edulink-Student-ID-Card.png')"}}>
                        <div className="content">
                            <h3>Apply Now for Student ID Card</h3>
                            <p>Amazing savings with global edulink student id card and more money to spend On The Things You Love</p>
                            <a href="/student-id-card/" className="btn btn-outline-primary rounded-pill">Apply Now</a>
                        </div>
                        <div className="overly bg-dark"></div>
                    </div>
                </Col>
                <Col Col lg={6} md={6} sm={12} className="p-0">
                    <div className="links__boxDiv" style={{backgroundImage:"url('https://www.globaledulink.co.uk/wp-content/uploads/2021/10/Global-Edulink-Become-an-Instructor.png')"}}>
                        <div className="content">
                            <h3>Become an Instructor</h3>
                            <p>Top instructors from around the world teach thousands of students on Global Edulink. We
                                provide the tools and skills to teach what you love.</p>
                            <a href="/become-an-instructor/" className="btn btn-outline-primary rounded-pill">Start Now</a>
                        </div>
                        <div className="overly bg-dark"></div>
                    </div>
                </Col>
                <Col Col lg={6} md={6} sm={12} className="p-0">
                    <div className="links__boxDiv" style={{backgroundImage:"url('https://www.globaledulink.co.uk/wp-content/uploads/2021/10/Global-Edulink-Corporate-Training.png')"}}>
                        <div className="content">
                            <h3>Corporate Training</h3>
                            <p>Provide training for your staff in a whole range of subjects with Global Edulink. Whether it’s creative thinking, first aid, technical writing, or telephone skills, we have courses covering many topics, so your staff can develop a range of practical skills.</p>
                            <a href="/corporate-training/" className="btn btn-outline-primary rounded-pill">Start Now</a>
                        </div>
                        <div className="overly bg-gradient"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default boxes
