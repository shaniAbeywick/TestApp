import React from 'react'
import '../App.css'
import '../styles/courses.css'
import { Container, Nav, Col, Row } from 'react-bootstrap'

function courses() {
    return (
        <section className="together__shaping">
            <Container>
                <div className="section_title">
                    <h2>Together, Shaping your future</h2>
                </div>
                <Nav variant="tabs" className=" justify-content-center main__tabs mt-5" id="myTab" role="tablist">
                    <Nav.Item role="presentation">
                        <Nav.Link  href="#profile">Popular Courses </Nav.Link>

                    </Nav.Item>

                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="#new">New Courses</Nav.Link>


                    </Nav.Item>
                </Nav>




                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <Row>
                        <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="course__widget " data-id={279987}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <small className=""><small style={{ width: '0%' }} className="bi bi-star" /></small></strong></div>
                                </div><a href="/course/cipd-level-3-foundation-certificate-in-people-practice/" className="title">CIPD Level 3 Foundation Certificate in People Practice</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://globaledulink.co.uk/wp-content/uploads/2022/09/MicrosoftTeams-image-6-310x143.jpg" className="rounded-circle wp-post-image" alt="CIPD Level 3 Foundation Certificate in People Practice" loading="lazy" srcSet="https://globaledulink.co.uk/wp-content/uploads/2022/09/MicrosoftTeams-image-6-310x143.jpg" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> 'CIPD'</span> <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£2,199.00</bdi></span></del>
                                        £1,199.00 </bdi></div>
                                </div>
                                <div className="widget_foot"> <a href="/course/cipd-level-3-foundation-certificate-in-people-practice/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=309572" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={280399}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.5</i><small className="bp_blank_stars"><small style={{ width: '92%' }} className="bi bi-star" /></small></strong></div>4.6
                                </div><a href="/course/foundation-certificate-in-business-analysis-4-2/" className="title">Foundation Certificate in Business Analysis</a>
                                <div className="course_info">
                                    <img width={300} height={142} src="https://www.globaledulink.co.uk/wp-content/uploads/2020/10/Foundation-Certificate-in-Business-Analysis-2.0-310x143.jpg" className="rounded-circle wp-post-image" alt="Foundation Certificate in Business Analysis" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2020/10/Foundation-Certificate-in-Business-Analysis-2.0-310x143.jpg" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> 'BCS'</span>
                                        <bdi className="price">
                                            £469.00</bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/foundation-certificate-in-business-analysis-4-2/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=118065" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={271491}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.6</i><small className="bp_blank_stars"><small style={{ width: '92%' }} className="bi bi-star" /></small></strong></div>4.6
                                </div><a href="/course/prince2-practitioner-certification/" className="title">PRINCE2® Practitioner</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg" className="rounded-circle wp-post-image" alt="PRINCE2® Practitioner" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg 300w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg 460w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg 1024w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg 768w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg 120w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg 310w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/PRINCE2-Practitioner-Course.jpg    1300w" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "AXELOS"</span> <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£889.00</bdi></span></del>
                                        £529.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/prince2-practitioner-certification/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=8138" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={246554}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.6</i><small className="bp_blank_stars"><small style={{ width: '92%' }} className="bi bi-star" /></small></strong></div>4.6
                                </div><a href="/course/prince2-6th-edition-foundation-certification-new-01/" className="title">PRINCE2® Foundation</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://globaledulink.co.uk/wp-content/uploads/2022/05/PRINCE2®-6th-Edition-Foundation-Certification-3.jpg" className="rounded-circle wp-post-image" alt="PRINCE2® FoundationF" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 Year</span> <span><i className="fa fa-trophy" /> "AXELOS"</span> <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£829.00</bdi></span></del>
                                        £499.00 </bdi></div>
                                </div>
                                <div className="widget_foot"> <a href="/course/prince2-6th-edition-foundation-certification-new-01/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=252914" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={266350}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">5.0</i><small className="bp_blank_stars"><small style={{ width: '100%' }} className="bi bi-star" /></small></strong></div>5.0
                                </div><a href="/course/itil-4-foundation-online-course/" className="title">ITIL® 4 Foundation</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg" className="rounded-circle wp-post-image" alt="ITIL 4 Foundation" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg 300w, https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg 460w, https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg 1024w, https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg 768w, https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg 120w, https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg 310w, https://www.globaledulink.co.uk/wp-content/uploads/2021/05/ITIL-4-Foundation.jpg 1300w" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "AXELOS"</span> <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£749.00</bdi></span></del>
                                        £449.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/itil-4-foundation-online-course/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=266577" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={172686}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.5</i><small className="bp_blank_stars"><small style={{ width: '90%' }} className="bi bi-star" /></small></strong></div>4.5
                                </div><a href="/course/prince2-agile-foundation-course-official-exam-included-2/" className="title">PRINCE2 Agile® Foundation Certification</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://globaledulink.co.uk//cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-300x138.jpg" className="rounded-circle wp-post-image" alt="PRINCE2 Agile® Foundation Certification" loading="lazy" srcSet="//cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-300x138.jpg 300w, //cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-460x212.jpg 460w, //cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-1024x473.jpg 1024w, //cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-768x354.jpg 768w, //cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-120x55.jpg 120w, //cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-310x143.jpg 310w, //cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification.jpg 1300w" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "AXELOS"</span> <bdi className="price">£359.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/prince2-agile-foundation-course-official-exam-included-2/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=172825" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={172804}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.5</i><small className="bp_blank_stars"><small style={{ width: '90%' }} className="bi bi-star" /></small></strong></div>4.5
                                </div><a href="/course/prince2-agile-practitioner-course-official-exam-included-2-2/" className="title">PRINCE2 Agile® Practitioner Certification</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2022/05/PRINCE2-Agile%C2%AE-Practitioner-Certification.jpg" className="rounded-circle wp-post-image" alt="PRINCE2 Agile® Practitioner Certification" loading="lazy" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "AXELOS"</span> <bdi className="price">£369.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/prince2-agile-practitioner-course-official-exam-included-2-2/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=172826" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={287034}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.6</i><small className="bp_blank_stars"><small style={{ width: '88%' }} className="bi bi-star" /></small></strong></div>4.4
                                </div><a href="/course/level-7-award-in-leadership-coaching-and-mentoring/" className="title">CMI Level 7 Award in Leadership Coaching and Mentoring</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2018/10/Level-7-Award-in-Coaching-and-Mentoring-310x143.jpg" className="rounded-circle wp-post-image" alt="CMI Level 7 Award in Leadership Coaching and Mentoring" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2018/10/Level-7-Award-in-Coaching-and-Mentoring-310x143.jpg" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "CMI"</span>
                                        <bdi className="price">
                                            £379.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/level-7-award-in-leadership-coaching-and-mentoring/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=154039" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg md sm ="12" className='text-center'>
                            <a href="/popular-courses/" className="btn btn-link">View All</a>
                            </Col> 
                        </Row>
                    </div>
                    <div className="tab-pane fade" id="#new" role="tabpanel" aria-labelledby="new-tab">
                        <Row>
                        <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={150490}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.6</i><small className="bp_blank_stars"><small style={{ width: '96%' }} className="bi bi-star" /></small></strong></div>4.8
                                </div><a href="/course/cemap-module-1/" className="title">CeMAP Certificate in Mortgage Advice (Module 1)</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2022/07/MicrosoftTeams-image-310x143.jpg" className="rounded-circle wp-post-image" alt loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2022/07/MicrosoftTeams-image-310x143.jpg" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fas fa-graduation-cap" /> 'CPD &amp; iAP'</span>
                                        <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£269.00</bdi></span></del>
                                            £199.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/cemap-module-1/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=304347" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={150463}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.5</i><small className="bp_blank_stars"><small style={{ width: '90%' }} className="bi bi-star" /></small></strong></div>4.5
                                </div><a href="/course/first-aid-at-work-level-3/" className="title">First Aid at Work - Level 3</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2022/10/MicrosoftTeams-image-53-300x138.jpg" className="rounded-circle wp-post-image" alt="First Aid at Work - Level 3" loading="lazy" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "CPD &amp; iAP"</span> <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£199.00</bdi></span></del>
                                        £39.00</bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/first-aid-at-work-level-3/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=317523" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={187355}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.6</i><small className="bp_blank_stars"><small style={{ width: '92%' }} className="bi bi-star" /></small></strong></div>4.6
                                </div><a href="/course/practitioner-certificate-in-business-analysis-practice/" className="title">Practitioner Certificate in Business Analysis Practice</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg" className="rounded-circle wp-post-image" alt="Practitioner Certificate in Business Analysis Practice" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg 300w, https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg 460w, https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg 1024w, https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg 768w, https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg 120w, https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg 310w, https://www.globaledulink.co.uk/wp-content/uploads/2019/11/Practitioner-Certificate-in-Business-Analysis-Practice.jpg 1300w" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "BCS"</span> <bdi className="price">£569.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/practitioner-certificate-in-business-analysis-practice/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=187419" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={154311}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.5</i><small className="bp_blank_stars"><small style={{ width: '90%' }} className="bi bi-star" /></small></strong></div>4.5
                                </div><a href="/course/emergency-paediatric-first-aid-level-2/" className="title">Emergency Paediatric First Aid - Level 2</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="/wp-content/uploads/2022/10/MicrosoftTeams-image-54-300x138.jpg" className="rounded-circle wp-post-image" alt="Emergency Paediatric First Aid - Level 2" loading="lazy" srcSet="/wp-content/uploads/2022/10/MicrosoftTeams-image-54-300x138.jpg" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "CPD &amp; iAP"</span> <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£149.00</bdi></span></del>
                                        £29.00</bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/emergency-paediatric-first-aid-level-2/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=317527" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={268855}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.4</i><small className="bp_blank_stars"><small style={{ width: '88%' }} className="bi bi-star" /></small></strong></div>4.4
                                </div><a href="/course/level-3-award-in-education-and-training-aet-online/" className="title">Pearson BTEC Level 3 Award in Education and Training</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg" className="rounded-circle wp-post-image" alt="Pearson BTEC Level 3 Award in Education and Training" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg 300w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg 460w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg 1024w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg 768w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg 120w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg 310w, https://www.globaledulink.co.uk/wp-content/uploads/2021/06/Pearson-BTEC-Level-3-Award-in-Education-and-Training.jpg 1300w" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "Pearson BTEC"</span> <bdi className="price">£269.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/level-3-award-in-education-and-training-aet-online/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=272463" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={291928}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.5</i><small className="bp_blank_stars"><small style={{ width: '90%' }} className="bi bi-star" /></small></strong></div>4.5
                                </div><a href="/course/level-1-award-in-british-sign-language/" className="title">Level 1 Award in British Sign Language (BSL)</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="/wp-content/uploads/2022/01/Untitled-1-310x143.jpg" className="rounded-circle wp-post-image" alt="Level 1 Award in British Sign Language (BSL)" loading="lazy" srcSet="/wp-content/uploads/2022/01/Untitled-1-310x143.jpg" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "Signature"</span>
                                        <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£499.00</bdi></span></del>
                                            £299.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/level-1-award-in-british-sign-language/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=314520" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={272956}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.5</i><small className="bp_blank_stars"><small style={{ width: '90%' }} className="bi bi-star" /></small></strong></div>4.5
                                </div><a href="/course/introduction-to-phlebotomy/" className="title">Introduction to Phlebotomy (Knowledge Based)</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="//cdn.globaledulink.co.uk/wp-content/uploads/2019/05/PRINCE2-Agile®-Foundation-Certification-300x138.jpg" className="rounded-circle wp-post-image" alt="Introduction to Phlebotomy (Knowledge Based)" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2021/07/Introduction-to-Phlebotomy.jpg 300w, https://www.globaledulink.co.uk/wp-content/uploads/2021/07/Introduction-to-Phlebotomy.jpg 460w, https://www.globaledulink.co.uk/wp-content/uploads/2021/07/Introduction-to-Phlebotomy.jpg 1024w, https://www.globaledulink.co.uk/wp-content/uploads/2021/07/Introduction-to-Phlebotomy.jpg 768w, https://www.globaledulink.co.uk/wp-content/uploads/2021/07/Introduction-to-Phlebotomy.jpg 120w, https://www.globaledulink.co.uk/wp-content/uploads/2021/07/Introduction-to-Phlebotomy.jpg 310w, https://www.globaledulink.co.uk/wp-content/uploads/2021/07/Introduction-to-Phlebotomy.jpg 1300w" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "CPD &amp; iAP"</span>
                                        <bdi className="price"> <del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>£195.00</bdi></span></del>
                                            £79.00</bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/introduction-to-phlebotomy/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=273394" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                            <Col xl lg = '3'md sm = "6" col={12}>
                            <div className="widget course__widget 3" data-id={151272}>
                                <span className="custom_wish" />
                                <div className="d-flex justify-between align-items-center ratings">
                                    <div className="star-rating"><strong className="course-star-rating"> <i className="hide">4.4</i><small className="bp_blank_stars"><small style={{ width: '88%' }} className="bi bi-star" /></small></strong></div>4.4
                                </div><a href="/course/cmi-level-4-diploma-in-management-and-leadership/" className="title">CMI Level 4 Diploma in Management and Leadership</a>
                                <div className="course_info">
                                    <img width={300} height={138} src="https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg" className="rounded-circle wp-post-image" alt="CMI Level 4 Diploma in Management and Leadership" loading="lazy" srcSet="https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg 300w, https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg 460w, https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg 1024w, https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg 768w, https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg 120w, https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg 310w, https://www.globaledulink.co.uk/wp-content/uploads/2018/10/CMI-Level-4-Diploma-in-Management-and-Leadership.jpg 1300w" sizes="(max-width: 300px) 100vw, 300px" />
                                    <div> <span className="text-truncate"><i className="fa fa-clock" /> 1 year</span> <span><i className="fa fa-trophy" /> "CMI"</span> <bdi className="price">£899.00 </bdi>
                                    </div>
                                </div>
                                <div className="widget_foot"> <a href="/course/cmi-level-4-diploma-in-management-and-leadership/" className="btn btn-outline-primary rounded-pill">Details</a> <a href="/checkout/?add-to-cart=154139" data-quantity={1} className="btn btn-primary rounded-pill">Buy Now</a></div>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <a href="/new-courses/" className="btn btn-link">View All</a>
                        </Row>
                    </div>
                </div>

            </Container>
        </section >
    )
}

export default courses
