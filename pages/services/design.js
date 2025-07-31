import Link from "next/link";
import React from "react";
import Seo from "../../components/common/Seo";
import Footer2 from "../../components/footer/Footer2";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import NewsLetter from "../../components/footer/NewsLetter";
import DefaulHeader from "../../components/header/DefaulHeader";
import CourseCategory from "../../components/home-page/home-3/CourseCategory";
import CourseFeatured from "../../components/home-page/home-3/CourseFeatured";
import CourseFilter from "../../components/home-page/home-3/CourseFilter";
import Faq from "../../components/home-page/home-3/Faq";
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import FeatureBlock2 from "../../components/home-page/home-3/FeatureBlock2";
import Hero from "../../components/home-page/home-3/Hero";
import HowToStartBlock from "../../components/home-page/home-3/HowToStartBlock";
import SignUpBanner from "../../components/home-page/home-3/SignUpBanner";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import FaqAccordion from "../../components/faqs/FaqAccordion";
import FooterContent from "../../components/home-page/home-13/FooterContent";



const education = () => {
  return (
    <>
      <Seo pageTitle="Education" />
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <DefaulHeader />
      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <Hero />
      {/* <!--
        =====================================================
        Feature Section Thirty Nine
        =====================================================
        --> */}
      <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10">
        <div className="container">
          <div className="row gx-xxl-5">
            <FeatureBlock />
          </div>
        </div>
        <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className="shapes shape-one lazy-img"
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="shapes shape-two lazy-img"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="shapes shape-three lazy-img"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="shapes shape-four lazy-img"
        />
      </div>
      {/*
        =====================================================
        Feature Section Forty
        =====================================================
        */}
      <div className="fancy-feature-forty mt-140 lg-mt-100">
        <div className="container">
          <div
            className="title-style-one text-center mb-85 lg-mb-30"
            data-aos="fade-up"
          >
            <div className="sc-title text-uppercase">Layanan Desain</div>
            <h2 className="main-title fw-500 tx-dark m0">
              Kami siap bantu desain untuk bisnis Anda
            </h2>
          </div>
        </div>
        {/* End .container */}

        <div className="bg-wrapper m-auto">
          <div className="container">
            <div className="row">
              <CourseCategory />
            </div>
          </div>
        </div>
        {/* End bg-wrapper */}
      </div>

      {/*
    =====================================================
    Feature Section Forty One
    =====================================================
    */}
      <div className="fancy-feature-fortyOne position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
                <div className="sc-title text-uppercase">origin Famous</div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Kenapa desain di Famous?
                </h2>
              </div>
              {/* End title */}
              <Faq />
              {/* /.accordion-style-six */}
              <a href="#" className="btn-one fw-500 mt-50 md-mt-40">
                Explorer All
              </a>
            </div>
            {/* End col-xl-5 */}

            <div
              className="col-xxl-6 col-xl-7 col-lg-6 ms-auto"
              data-aos="fade-left"
            >
              <div className="wrapper position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-70">
                <div className="row">
                  <CourseFeatured />
                </div>
                <img
                  src="/images/shape/shape_152.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <img
                  src="/images/shape/shape_153.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
                />
              </div>
              {/* /.wrapper */}
            </div>
            {/* End col-xl-6 */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-fortyOne */}

      {/* 
		=============================================
		Feature Section Forty Two
		============================================== 
		*/}
      <div className="fancy-feature-fortyTwo position-relative pt-130 pb-180 mt-180 lg-pt-80 lg-pb-80 xs-mt-120">
        <div className="rating-box">
          <img src="/images/shape/shape_154.svg" alt="media" />
          <div className="rate fw-500 tx-dark">
            Best <br />
          </div>
        </div>
        {/* End rating-box */}

        <div className="container">
          <div className="wrapper position-relative">
            <div className="title-style-one mb-30">
              <h2 className="main-title fw-500 tx-dark m0">Our Portofolio</h2>
            </div>
            <CourseFilter />
            {/* /.slider-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
        {/* End .container */}
      </div>

      {/* <!-- 
		=============================================
		Feature Section Forty Three
			============================================== 
		--> */}
      <HowToStartBlock />

      {/*
			=====================================================
				Feedback Section Thirteen
			=====================================================
			*/}
      <div
        className="feedback-section-thirteen position-relative mt-130 pb-25 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-10 m-auto">
              <div className="title-style-one text-center mb-40 lg-mb-20">
                <h2 className="main-title fw-500 tx-dark m0">
                  What’s our client Say About us.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
            {/* /.feedback_slider_seven */}
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  FAQ
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Questions &amp; Answers
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Feature Section Thirty Three
			============================================== 
			*/}
      <div className="fancy-feature-thirtyThree mt-100 lg-mt-80">
        <div className="container">
          <div className="border-bottom pb-100 lg-pb-70">
            <div className="bg-wrapper position-relative" data-aos="fade-up">
              <FaqAccordion />
              <img
                src="/images/shape/shape_133.svg"
                alt="shape"
                className="lazy-img shapes shape-one"
              />
            </div>
            {/* /.bg-wrapper */}

            <div className="text-center  mt-80 lg-mt-50" data-aos="fade-up">
              <h3 className="fw-bold tx-dark mb-30">Masih ada yang ingin ditanyakan?</h3>
              <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      

     {/*
        =====================================================
        Footer
        =====================================================
        */}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/famous.png" alt="" width={150} />
                  </Link>
                </div>
              </div>
              <FooterContent />
              <div className="col-md-3 col-sm-6 mb-30 ">
                <h5 className="footer-title fw-500">Our Address</h5>
                <p className="fs-17">
                  Babadan Rukun 07/31<br>
                  </br>
                  Surabaya, Indonesia<br></br>60179
                </p>
                <a
                  href="mailto:januinc@company.com"
                  className="email tran3s fs-17"
                >
                  support@originfamous.id
                </a>
                <br />
                <a
                  href="tel:+628113651127"
                  className="mobile tran3s fs-20 mt-20 mb-30"
                >
                  +62811-365-1127
                </a>
              </div>
              </div>
            </div>
            {/* /.inner-wrapper */}
            
          </div>
          
          <div className="shapes shape-one rounded-circle" />
          <div className="shapes shape-two rounded-circle" />
          <img
            src="/images/shape/shape_42.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_43.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>
        {/* /.top-footer */}
        <CopyrightFooter2 />
      </div>
      {/* /.footer-style-two */}
      {/* /.footer-style-nine */}
    </>
  );
};

export default education;
