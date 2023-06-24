import React from 'react'
import "../styles/liveCourses.css"
import { Container,Row,Col,Card,Image } from 'react-bootstrap'

function liveCourses() {
    return (
        <section className="popular_live_courses">
            <Container>
                <div className="section_title">
                    <h2>Our Popular Live Online Courses</h2>
                </div>
                <Row>
                    <Col lg={3} md={6} sm={6} >
                        <Card>
                        <a href="/pearson-btec-level-3-award-in-education-and-training-rqf-bootcamp/" >
                            <div className="media">
                                <figure><Image src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/awarding-logo/image-6.png" height="60" /></figure>
                                <h3 className="hide_desktop">Pearson BTEC Level 3 Award in Education and Training (RQF)(Formerly PTLLS)</h3>
                                <bdi className="price">£219</bdi>
                            </div>
                            <h3 className="hide-Mobo">Pearson BTEC Level 3 Award in Education and Training (RQF)(Formerly PTLLS)</h3>
                        </a>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={6} >
                        <Card>
                        <a href="/itil-4-foundation-live-online/" >
                            <div className="media">
                                <figure><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/09/ITIL.jpg" height="60" /></figure>
                                <h3 className="hide_desktop">ITIL 4 Foundation</h3>
                                <bdi className="price">£589</bdi>
                            </div>
                            <h3 className="hide-Mobo">ITIL 4 Foundation</h3>
                        </a>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={6} >
                        <Card>
                        <a href="/price2-foundation-live-online/" >
                            <div className="media">
                                <figure><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/09/prince2.jpg" height="60" /></figure>
                                <h3 className="hide_desktop">Prince2 Foundation</h3>
                                <bdi className="price">£849</bdi>
                            </div>
                            <h3 className="hide-Mobo">Prince2 Foundation</h3>
                        </a>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={6} >
                        <Card>
                        <a href="/foundation-certificate-in-business-analysis-bootcamp/" >
                            <div className="media">
                                <figure><Image src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/awarding-logo/image-1.png" height="60" /></figure>
                                <h3 className="hide_desktop">Foundation Certificate in Business Analysis</h3>
                                <bdi className="price">£499</bdi>
                            </div>
                            <h3 className="hide-Mobo">Foundation Certificate in Business Analysis</h3>
                        </a>
                        </Card>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='text-center'>
                        <a href="/live-online-classNamees/" className="btn btn-link">View All</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default liveCourses
