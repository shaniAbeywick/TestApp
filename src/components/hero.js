import React from 'react'
import { Container,Row,Col,Form, InputGroup} from 'react-bootstrap'

function hero() {
  return (
    <section className="main_header_aera skip-lazy no-lazy-load data-skip-lazy" style={{backgroundImage: 'url("https://cdn.globaledulink.co.uk//wp-content/uploads/2021/10/Global-Edulink-Main-Slider.png")'}}>
  <Container>
    <Row className="align-items-center justify-content-center ">
      <Col lg={5} md={9} className="ms-auto">
        <div className="content_div">
          <h1>ACCREDITED ONLINE LEARNING FROM ANYWHERE</h1>
          <p>Get accredited qualifications from anywhere and access course content on any device.</p>
          <div className="mb-4 mt-3 position-relative">
            <Form className="revamp__headerForm" method="get" action="https://www.globaledulink.co.uk/" style={{width: '100%'}}>
              <input name="post_type" type="hidden" defaultValue="course" />
              <InputGroup>
                <InputGroup.Text id="basic-addon1"/><i className="fa fa-search" /> 
                <input type="search" name="s" id="search_s" autoComplete="off" alt={2} className="form-control fr_search_key fr_search_key_ad" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" required style={{}} placeholder="Search what you want" data-stylerecorder="true" />
                </InputGroup>
            </Form>
            <div id="search-container-2" className="fr-search-list " style={{display: 'none'}} />
          </div>
          <div className="d-flex main__trustpilot">
            <a href="https://uk.trustpilot.com/review/globaledulink.co.uk">
              <img src="https://globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/trust-pilot/trust-pilot-home.png" width="100%" alt="GlobalEdulink eLearning website ratings and reviews" /> 
            </a>
          </div>
        </div>
      </Col>
    </Row>
    </Container>
</section>

  )
}

export default hero
