import React from 'react'
import '../styles/reviews.css'
import { Container,Row,Col} from 'react-bootstrap'

function reviews() {
  return (
    <section className="main_reviews">
        <Container>
            <div className="section_title">
                <h2>We have Great Reviews</h2>
            </div>
            <Row className="all__review pt-0">
                <Col lg={3} md={4}>
                    <div className="left_bx_reevis text-center">
                        <a href="https://uk.trustpilot.com/review/globaledulink.co.uk"><img alt="" src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/trustpilot-new%203.png" width="" /></a>
                        <p><strong>4.8</strong> Rating <strong>1,742</strong> Reviews</p>
                    </div>
                </Col>
                <Col lg={9} md={8} >
                    <Row>
                        <Col md={4}>
                            <a href="https://uk.trustpilot.com/review/globaledulink.co.uk">
                                <div className="widget reviews__box">
                                    <span className="star-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                    <h4>Shelley Marshall</h4>
                                    <p>I have loved doing this level 4 Skincare course with Global Ed. The information in this course is indepth. Lots of digestable information.I love the workbooks I can download and go back to.</p>
                                    <div className="posted_dated">Posted 1 day ago</div>
                                </div>
                            </a>
                        </Col>
                        <Col md={4}>
                            <a href="https://uk.trustpilot.com/review/globaledulink.co.uk">
                                <div className="widget reviews__box">
                                    <span className="star-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                    <h4>Corey Airey</h4>
                                    <p>Very informative course. I have learnt alot and found the course easy to follow. The tutors and staff are very helpful if you run into an issues.</p>
                                    <div className="posted_dated">Posted 4 days ago</div>
                                </div>
                            </a>
                       </Col>
                       <Col md={4}>
                            <a href="https://uk.trustpilot.com/review/globaledulink.co.uk">
                                <div className="widget reviews__box">
                                    <span className="star-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                    <h4>Tash</h4>
                                    <p>I bought an online course 'Diploma in Office Administration and Reception' and was NOT disappointed! The course is very detailed, and whilst I more so bought it as a refresher for myself.</p>
                                    <div className="posted_dated">Posted 4 days ago</div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default reviews
