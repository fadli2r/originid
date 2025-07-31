import Link from "next/link";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Hero from "../../components/home-page/home-12/Hero";
import PortfolioGallery2 from "../../components/portfolio/PortfolioGallery2";
import Testimonial from "../../components/home-page/home-12/Testimonial";
import Partners from "../../components/home-page/home-12/Partners";
import FooterContent from "../../components/home-page/home-13/FooterContent";
import Subscribe from "../../components/home-page/home-13/Subscribe";
import CopyrightFooter from "../../components/home-page/home-13/CopyrightFooter";
import Service2 from "../../components/services/Service2";

import Image from "next/image";

const DesignAgency = () => {
  return (
    <>
      <Seo pageTitle="Design Agency" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />
      {/* /.hero-banner-eleven */}
      {/* 
        =============================================
        Feature Section Fifty Three
        ============================================== 
        */}
      <div  className="fancy-feature-fiftyThree position-relative pt-150 pb-200 lg-pt-80 lg-pb-110">
        <div className="container">
          <div
            className="title-style-eleven text-center pb-50 lg-pb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title tx-dark">Quality Services</h2>
          </div>
          <div className="row">
            <Service2 />
          </div>
        </div>
        <img
          src="/images/shape/shape_174.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-md-inline-block"
        />
        <div className="shapes shape-two" />
        <div className="shapes shape-three" />
      </div>
      {/* /.fancy-feature-fiftyThree */}

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
        <div
            className="title-style-eleven text-center pb-50 lg-pb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title tx-dark">Portofolio</h2>
          </div>
      <PortfolioGallery2 />

      {/*
			=====================================================
				Feedback Section Twelve
			=====================================================
			*/}
      <div
        className="feedback-section-twelve position-relative mt-110 sm-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-6 col-sm-8 m-auto">
              <div className="title-style-five text-center mb-80 lg-mb-60">
                <h2 className="main-title font-recoleta fw-500 tx-dark">
                  What’s our client Say About us.
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="slider-wrapper">
                <div className="feedback_slider_nine">
                  <Testimonial />
                </div>
                {/* /.feedback_slider_nine */}
              </div>
              {/* /.slider-wrapper */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_143.svg"
          alt="shape"
          className="shapes lazy-img shape-one"
        />
        <img
          src="/images/shape/shape_144.svg"
          alt="shape"
          className="shapes lazy-img shape-two"
        />
      </div>
      {/* /.feedback-section-twelve */}

      {/* 
			=============================================
				Partner Section Six
			============================================== 
			*/}
      <div className="partner-section-six mt-140 lg-mt-80" data-aso="fade-up">
        <div className="container">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <span className="lines" />
              <div className="title text-uppercase tx-dark text-center">
                JANO has been featured In
              </div>
              <span className="lines" />
            </div>
            {/* End d-flex */}

            <div className="partner_slider_one mt-65 lg-mt-40">
              <Partners />
            </div>
            {/* End partner_slide */}
          </div>
        </div>
      </div>
      {/* /.partner-section-six */}

      

      {/*
			=====================================================
				Fancy Short Banner Fourteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-fourteen mt-200 lg-mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="wrapper pb-90 lg-pb-40">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-9">
                <h2 className="title font-recoleta fw-normal tx-dark position-relative m0 text-center text-md-start sm-pb-30">
                  Any <span>Project</span> in your mind? Let’s Chat.
                </h2>
              </div>
              <div className="col-lg-4 col-md-3">
                <a
                  href="#"
                  className="btn-twentyThree d-flex align-items-center justify-content-center m-auto me-md-0 ms-md-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  <Image
                    width={51}
                    height={51}
                    src="/images/icon/icon_115.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-short-banner-fourteen */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/famous-2.png" alt="" width={150} />
                  </Link>
                </div>
              </div>
              <FooterContent />

              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newslettert</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}

        <CopyrightFooter />

        <div className="shapes shape-one" />
        <img
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.footer-style-nine */}
    </>
  );
};

export default DesignAgency;
