import React from 'react'
import '../styles/brands.css'
import { Container,Row,Col,Image } from 'react-bootstrap'

function brands() {
  return (
    <section className="main_brands_working">
        <Container>
            <div className="w-100 brands_wapper d-inline-block" >
                <div className="section_title">
                    <h2>Brands Working With Us</h2>
                    <p>If you want to get qualified it's important to make sure that the course you take is accredited,
                        which means that an awarding body has inspected the course, and has approved the qualification.
                        Awarding bodies are organizations that are strictly regulated, and make sure that the resources and
                        qualifications they approve are of an extremely high standard</p>
                </div>
                <div className="text-center w-100">
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/image-100.png" /></div>
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/amazon.png" /></div>
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/image-94.png" /></div>
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/image-95.png" /></div>
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/image-96.png" /></div>
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/image-97.png" /></div>
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/image-92.png" /></div>
                    <div className="logo_div"><Image src="https://www.globaledulink.co.uk/wp-content/uploads/2021/10/salesforce.png" /></div>
                </div>

                <Row>
                    <Col lg={12} md={12} sm={12}className="text-center">
                        <a href="/our-partners/" className="btn btn-link">VIEW ALL</a>
                    </Col>

                </Row>
            </div>
        </Container>
    </section>
  )
}

export default brands
