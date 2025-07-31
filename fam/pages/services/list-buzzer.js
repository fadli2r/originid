import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-buzzer/Header";
import Hero from "../../components/home-page/home-buzzer/hero";
import Testimonial from "../../components/home-page/home-2/Testimonial";
import Partners from "../../components/home-page/home-buzzer/hero/Partners";
import Link from "next/link";
import Social from "../../components/home-page/home-9/Social";
import Image from "next/image";
import CourseFilter from "../../components/home-page/home-3/CourseFilter";



const LeadGeneration = () => {
  return (
    <>
      <Seo pageTitle="Insurance" />
      {/* <!-- 
      =============================================
    Theme Default Menu
     ============================================== 	
    --> */}
      <Header />
      
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
<div className="hero-banner-nine position-relative zn2 pt-100 md-pt-75">
  
    <div className="custompage hero-banner-nine">
      <div className="search-bo">
    <div class="form-outline" data-mdb-input-init>
  <input type="search" id="form1" class="form-control" placeholder="Cari Influencer" aria-label="Search" />
</div></div>
      {/* 
		=============================================
		Feature Section Forty Two
		============================================== 
		*/}
        
        {/* End rating-box */}

        <div className="container">
          <div className="wrapper position-relative">
            <div className="title-style-one mb-20">
              <h2 className="main-title fw-500 tx-dark m0 text-center">Rekomendasi</h2>
            </div>
            <CourseFilter />
            {/* /.slider-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
        <div className="pembatas"></div>
        {/* End .container */}

    
        <Hero />
        </div>

        <div className="partner-section-five position-relative mt-130 lg-mt-100">
        <div className="wrapper m-auto">
          <Partners />
        </div>
        {/* /.wrapper */}
      </div>
{/*=====================================================
			Feedback Section Six
			=====================================================*/}
        <div
          className="feedback-section-six p-30 mt-170 lg-mt-100 "
          data-aos="fade-up"
        >
          <div className="bg-wrapper position-relative pt-100 pb-110 lg-pt-60 lg-pb-50">
            <div className="container">
              <div className="position-relative inner-wrapper">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <img
                      src="/images/icon/icon_73.svg"
                      alt="icon"
                      className="m-auto"
                    />
                    <div className="title-style-seven text-center pt-30 pb-55">
                      <h2 className="main-title fw-bold text-white">
                        Check what these clients have to say.
                      </h2>
                    </div>
                    {/* /.title-style-seven */}
                  </div>
                </div>
                {/* End .row */}

                <Testimonial />
              </div>
              {/* /.inner-wrapper */}
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.feedback-section-six */}
        
        </div>
        
      {/* /.hero-banner-nine */}
      
      
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-four position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-30 order-lg-0">
              <div className="logo d-flex justify-content-center justify-content-lg-start">
                <Link href="/">
                  <img src="/images/logo/logo_04.png" alt="" width={77} />
                </Link>
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 d-flex justify-content-center justify-content-lg-end order-lg-3">
              <a
                href="mailto:support@jano.com"
                className="mail d-flex align-items-center"
              >
                <span className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <i className="far fa-envelope" />
                </span>
                <span>support@jano.com</span>
              </a>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 order-lg-2">
              <Social />
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </div>
    </>
  );
};

export default LeadGeneration;
