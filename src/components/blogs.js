import React from 'react'
import { Container,Col } from 'react-bootstrap';
import '../styles/blog.css'
import OwlCarousel from 'react-owl-carousel';  



function blogs() {
  return (
    <section className="recent_blog_posts">
        
    <Container>
        <div className="section_title ">
            <h2>Recent Blog Posts</h2>
        </div>
        <OwlCarousel className="recent_blog owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
            <div className="owl-stage" >
            <div className="owl-item cloned" >
                <div className="item">
                <div className="card rounded-10 border-0">
                    <figure><img src="https://www.globaledulink.co.uk/wp-content/uploads/2022/10/HI-Blog-MainImage-310x143.jpg" className="img-fluid"/></figure>
                    <h3><a href="/career-trends-and-in-demand-jobs-in-the-hotel-industry/">Career trends and in-demand jobs in the hotel industry</a></h3>
                    <p>Students enrolled in an Opera PMS hotel software training course may be curious about the potential career...</p>
                    <div className="card-footer bg-white border-0 p-0">
                        <div>
                            <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-icon.png" width="40" height="40"/>
                            <span>Blog<br/>OCT 06, 2022</span>
                        </div>
                        <a href="/career-trends-and-in-demand-jobs-in-the-hotel-industry/" className="btn btn-link">Read More <i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div></div>
            <div className="owl-item cloned" >
                <div className="item">
                <div className="card rounded-10 border-0">
                    <figure><img src="https://www.globaledulink.co.uk/wp-content/uploads/2022/10/CB-Blog-MainImage-310x143.jpg" className="img-fluid"/></figure>
                    <h3><a href="/how-to-start-your-cosmetology-business/">How to start your cosmetology business</a></h3>
                    <p>You may have seen enough content about skincare and breaking beauty standards, but have you ever thought...</p>
                    <div className="card-footer bg-white border-0 p-0">
                        <div>
                            <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-icon.png" width="40" height="40"/>
                            <span>Blog<br/>OCT 04, 2022</span>
                        </div>
                        <a href="/how-to-start-your-cosmetology-business/" className="btn btn-link">Read More <i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div></div>
            <div className="owl-item cloned" >
                <div className="item">
                <div className="card rounded-10 border-0">
                    <figure><img src="https://www.globaledulink.co.uk/wp-content/uploads/2022/10/PMS-Blog-MainImage-310x143.jpg" className="img-fluid"/></figure>
                    <h3><a href="/five-biggest-trends-in-the-hotel-industry-can-opera-pms-training-help/">Five biggest trends in the hotel industry: can Opera PMS Training help?</a></h3>
                    <p>Over the years, there have been various causes that have significantly altered how and why we travel. The pandemic's impact on business... </p>
                    <div className="card-footer bg-white border-0 p-0">
                        <div>
                            <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-icon.png" width="40" height="40"/>
                            <span>Blog<br/>OCT 02, 2022</span>
                        </div>
                        <a href="/five-biggest-trends-in-the-hotel-industry-can-opera-pms-training-help/" className="btn btn-link">Read More <i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div></div>
            <div className="owl-item cloned" >
                <div className="item">
                <div className="card rounded-10 border-0">
                    <figure><img src="https://www.globaledulink.co.uk/wp-content/uploads/2022/10/IT-P-Blog-MainImage-310x143" className="img-fluid"/></figure>
                    <h3><a href="/whats-the-current-job-market-for-it-professionals-like/">What's the current job market for IT professionals like?</a></h3>
                    <p>There are tens of thousands of highly paid and unfilled IT jobs available across the nation, making the information technology... </p>
                    <div className="card-footer bg-white border-0 p-0">
                        <div>
                            <img src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-icon.png" width="40" height="40"/>
                            <span>Blog<br/>SEP 30, 2022</span>
                        </div>
                        <a href="/whats-the-current-job-market-for-it-professionals-like/" className="btn btn-link">Read More <i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div></div>
            
            </div>
            </div>
            
            <div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot" fdprocessedid="1mwges"><span></span></button><button role="button" className="owl-dot" fdprocessedid="wt2juo"><span></span></button><button role="button" className="owl-dot" fdprocessedid="ody45q"><span></span></button><button role="button" className="owl-dot" fdprocessedid="bapdi"><span></span></button><button role="button" className="owl-dot active" fdprocessedid="dy1cu"><span></span></button></div>
        </OwlCarousel>
        <Col lg={12} md={12} sm={12} className="text-center">
            <a href="/blog/" className="btn btn-link">View All</a>
        </Col>
    </Container>
</section>
  )
}

export default blogs;
