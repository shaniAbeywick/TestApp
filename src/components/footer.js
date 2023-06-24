import React from 'react'
import "../styles/footer.css"
import { Container, Row, Col } from 'react-bootstrap'

function footer() {
    return (

        <Container>
            <Row>
                <Col lg={3} md={12} sm={12}>
                    <div className="widget">
                        <div className="widget-title">Contact Info</div>
                        <div className="contact-infos">
                            <div className="single-info">
                                <div className="icon-wrapper"><i className="fa fa-phone"></i></div>
                                <p><a href="tel:+442086098200">Call Us +4420-8609-8200</a></p>
                            </div>
                            <div className="single-info">
                                <div className="icon-wrapper"><i className="fab fa-whatsapp"></i></div>
                                <p><a href="https://wa.me/+447584056454">Whatsapp Us +4475-8405-6454</a></p>
                            </div>
                            <div className="single-info">
                                <div className="icon-wrapper"><i className="fa fa-envelope"></i></div>
                                <p><a href="mailto:support@globaledulink.co.uk">Support@globaledulink.co.uk</a></p>
                            </div>
                            <div className="single-info">
                                <div className="icon-wrapper"><i className="fa fa-map-marker"></i></div>
                                <p>CityPoint, 1 Ropemaker Street, London, EC2Y 9HU</p>
                            </div>
                        </div>
                        <ul className="social-links justify-content-lg-between justify-content-center">
                            <li><a href="https://www.facebook.com/GlobalEdulink"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/globaledulinkuk"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCwzL_Sy3JCnyNqxZxDnUgNw"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.instagram.com/globaledulinkltd/"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/company/global-edulink-ltd"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                        <div className="d-inline-block verify_btn mt-4 w-100">
                            <a href="/validate-certificate-code/" className="btn w-100 rounded-pill btn-outline-primary verify-btn" >Verify
                                Your Certificate</a>
                        </div>

                    </div>
                </Col>
                <Col lg={2} md={4} sm={6}>
                    <div className="widget">
                        <div className="widget-title">Quick Links</div>
                        <ul className="links">
                            <li><a href="/become-an-instructor/">Become an Instructor</a></li>
                            <li><a href="/corporate-training/">Corporate Training</a></li>
                            <li><a href="/our-partners/">Our Partners</a></li>
                            <li><a href="/awarding-bodies/">Accrediting Bodies</a></li>
                            <li><a href="/live-online-classNamees/">Live Online classNamees</a></li>
                            <li><a href="/all-online/">Online Courses</a></li>
                            <li><a href="/classNameroom-course-page/">classNameroom Courses</a></li>
                            <li><a href="https://courses.globaledulink.co.uk/itil-foundation-gb">ITIL® 4 Courses</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={6} >
                    <div className="widget">
                        <div className="widget-title">Resources</div>
                        <ul className="links">
                            <li><a href="/free-courses/">Free Courses</a></li>
                            <li><a href="/blog/">Blogs</a></li>
                            <li><a href="https://www.globaledulink.co.uk/pay-with-paypal/">Pay with Paypal</a></li>
                            <li><a href="/product/course-extension/">Course Extension Fee</a></li>
                            <li><a href="/product/retake-exam-fee/">Retake Exam Fee</a></li>
                        </ul>

                    </div>
                </Col>
                <Col lg={2} md={4} sm={6}>
                    <div className="widget">
                        <div className="widget-title">Support</div>
                        <ul className="links">
                            <li><a href="/faqs/">FAQ</a></li>
                            <li><a href="/our-partners/">Our Partners</a></li>
                            <li><a href="/terms-conditions/">Terms &amp; Conditions</a></li>
                            <li><a href="/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="/contact-us/">Contact Us</a></li>


                        </ul>
                    </div>
                </Col>
                <Col lg={3} md={12} sm={6} >
                    <div className="widget widget__logo">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/footer-logo-1.png" className="img-fluid" alt="Best online education provider Uunited Kingdom Globaledulink" />
                        </div>
                        <div className="d-flex align-items-center justify-content-md-center w-100 Imags2nd">
                            <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/footer-logo-2.png" className="img-fluid me-2" alt="Customer Outreach Award Globaledulink" />
                            <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/footer-logo-3.png" className="img-fluid" alt="Top 10 online courses GlobalEdulink" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:-40, marginLeft: -3}}>
                <Col lg={6} md={12} sm={12} >
                    <img src="https://www.globaledulink.co.uk/wp-content/uploads/2022/03/GEL.png" alt="UCAS Registered center GlobalEdulink" />
                </Col>
                <Col lg={6} md={12} sm={12} >

                    <div className="option gtop">
                        <span className="footer-menu-title gt_title">Choose your preferred language</span>

                        {/* <div className="switcher notranslate">
                            <div className="selected">
                                <a href="#" onclick="return false;"><img src="//www.globaledulink.co.uk/wp-content/plugins/gtranslate/flags/24/en.png" height="24" width="24" alt="en" /> English</a>
                            </div>
                            <div className="option">
                                <a href="#" onclick="doGTranslate('en|en');jQuery('div.switcher div.selected a').html(jQuery(this).html());return false;" title="English" className="nturl selected"><img data-gt-lazy-src="//www.globaledulink.co.uk/wp-content/plugins/gtranslate/flags/24/en.png" height="24" width="24" alt="en" /> English</a>
                                <a href="#" onclick="doGTranslate('en|fr');jQuery('div.switcher div.selected a').html(jQuery(this).html());return false;" title="French" className="nturl"><img data-gt-lazy-src="//www.globaledulink.co.uk/wp-content/plugins/gtranslate/flags/24/fr.png" height="24" width="24" alt="fr" /> French</a>
                                <a href="#" onclick="doGTranslate('en|de');jQuery('div.switcher div.selected a').html(jQuery(this).html());return false;" title="German" className="nturl"><img data-gt-lazy-src="//www.globaledulink.co.uk/wp-content/plugins/gtranslate/flags/24/de.png" height="24" width="24" alt="de" /> German</a>
                                <a href="#" onclick="doGTranslate('en|es');jQuery('div.switcher div.selected a').html(jQuery(this).html());return false;" title="Spanish" className="nturl"><img data-gt-lazy-src="//www.globaledulink.co.uk/wp-content/plugins/gtranslate/flags/24/es.png" height="24" width="24" alt="es" /> Spanish</a>
                                <a href="#" onclick="doGTranslate('en|ar');jQuery('div.switcher div.selected a').html(jQuery(this).html());return false;" title="Arabic" className="nturl"><img data-gt-lazy-src="//www.globaledulink.co.uk/wp-content/plugins/gtranslate/flags/24/ar.png" height="24" width="24" alt="ar" /> Arabic</a>
                                <a href="#" onclick="doGTranslate('en|hi');jQuery('div.switcher div.selected a').html(jQuery(this).html());return false;" title="Hindi" className="nturl"><img data-gt-lazy-src="//www.globaledulink.co.uk/wp-content/plugins/gtranslate/flags/24/hi.png" height="24" width="24" alt="hi" /> Hindi</a>
                            </div>
                        </div> */}



                    </div>
                </Col>

            </Row>
            <Row>
                <Col lg={7} md={6} col={12}>
                    <div className="copyRight d-flex align-items-center justify-content-md-start justify-content-center">
                        Copyright © 2023 -GlobalEdulink - All Rights Reserved.
                    </div>
                </Col>
                <Col lg={5} md={6} col={12} className="sectery_icon  text-md-right">
                    <Row>

                        <Col>
                            <div className="bg-white p-1 rounded-3"><img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/image-65.png" className="img-fluid" alt="Images for secure trust trusted commerce GlobalEdulink" /></div>
                        </Col>
                        <Col>
                            <div className="bg-white p-1 rounded-3"><img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/image-67.png" className="img-fluid" alt="PayPal: Secure Online Payment and Money Transfer Services Platform" /></div>
                        </Col>
                        <Col>
                            <div className="bg-white p-1 rounded-3"><img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/image-68.png" className="img-fluid" alt="VISA: Global Payment Technology Company and Electronic Payment Card Network" /></div>
                        </Col>
                        <Col>
                            <div className="bg-white p-1 rounded-3"><img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/image-69.png" className="img-fluid" alt="Mastercard: Global Financial Services Corporation and Payment Card Network" /></div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>



    )
}

export default footer
