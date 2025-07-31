import Link from "next/link";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-8/Header";
import Hero from "../../components/home-page/home-8/Hero";
import ShapeGroup from "../../components/home-page/home-8/ShapeGroup";
import Block1 from "../../components/home-page/home-8/Block1";
import Block2 from "../../components/home-page/home-8/Block2";
import BlockFeatureList from "../../components/home-page/home-8/BlockFeatureList";
import Block3 from "../../components/home-page/home-8/Block3";
import WhyChooseList from "../../components/home-page/home-8/WhyChooseList";
import Coutner from "../../components/home-page/home-8/Coutner";
import Testimonial from "../../components/home-page/home-8/Testimonial";
import Faq from "../../components/home-page/home-8/Faq";
import Blog from "../../components/home-page/home-8/Blog";
import CallToAction from "../../components/home-page/home-8/CallToAction";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer from "../../components/home-page/home-8/Footer";
import SocialPartner from "../../components/common/SocialPartner";

import Image from "next/image";

const crypto = () => {
  return (
    <div className="dark-bg-one">
      <ShapeGroup />

      <Seo pageTitle="Konsultan Digital Marketing Agency untuk UMKM" />

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
      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Hero />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="illustration-holder" data-aos="fade-right">
          <Image
            width={697}
            height={664}
            layout="intrinsic"
            src="/images/assets/hero-sale.png"
            alt="illustration"
            className="main-illustration lazy-img"
          />
          <div className="shapes shape-one rounded-circle" />
        </div>
        {/* /.illustration-holder */}
        <img
          src="/images/shape/shape_100.svg"
          alt="shape"
          className="lazy-img shapes line-shape"
        />
      </div>
      
      {/* 
        =============================================
        Feature Section Twenty Six
        ============================================== 
        */}
      <div className="fancy-feature-twentySix position-relative zn2 pt-70 lg-pt-80">
        <div className="wrapper mt-30 lg-mt-60">
          <div className="container">
            <div className="row justify-content-center">
              <Coutner />
            </div>
          </div>
        </div>
        {/* /.wrapper-xl */}

        <div className="container">
          <div
            className="title-style-nine text-center mt-80 mb-60 lg-mb-30"
            data-aos="fade-up"
          >
            <h2 className="main-title text-white">
              Our <span>Service</span>
            </h2>
            <p className="text-white opacity-50 fs-20 pt-15">
            Kami memiliki layanan Khusus bagi pelaku UMKM yang masih berkembang atau baru memulai usahanya.
            </p>
          </div>
          {/* /.title-style-nine */}

          <div className="row gx-xxl-5">
            <Block2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Seven
        ============================================== 
        */}
      <div className="fancy-feature-twentySeven position-relative zn2 mt-250 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto order-lg-last">
              <BlockFeatureList />
              {/* /.block-style-three */}
            </div>
            <div
              className="col-lg-6 col-md-8 m-auto order-lg-first"
              data-aos="fade-right"
            >
              <div className="illustration-holder md-mt-50 pe-xxl-1 pe-xl-5 pe-lg-4">
                <Image
                  width={569}
                  height={559}
                  layout="intrinsic"
                  src="/images/assets/how-p.png"
                  alt="illustration"
                  className="lazy-img main-img m-auto"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="container">
          <div className="wrapper mt-130 lg-mt-100" data-aos="fade-up">
            <div className="row">
              <Block3 />
            </div>
          </div>
          {/* /.wrapper */}
        </div>
        <div className="r-shape-one shapes" />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Eight
        ============================================== 
        */}
      <div className="fancy-feature-twentyEight position-relative zn2 mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-4">
              <WhyChooseList />
              {/* /.block-style-five */}
            </div>
            
          </div>
        </div>
        {/* /.container */}

        
        {/* /.wrapper */}
      </div>

      {/* 
		=============================================
		Partner Section One
		============================================== 
		*/}
      <div className="partner-section-one position-relative mt-160 mb-225 lg-mt-90 lg-mb-150 md-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div
                className="title-style-nine pb-20 text-center mb-70 lg-mb-30"
                data-aos="fade-up"
              >
                <h2 className="text-white main-title fw-normal">
                Lebih dari 100+{" "}
                  <span className="d-inline-block position-relative text-black">
                  Mitra dan Brand{" "}
                    <span/>
                  </span>{" "}
                   telah mempercayakan pemasaran digital kepada kami.
                </h2>
              </div>{" "}
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center justify-content-center">
                <SocialPartner />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.partner-section-one */}

      {/* 
        =============================================
        Feature Section Twenty Nine
        ============================================== 
        */}
      <div className="fancy-feature-twentyNine position-relative zn2 mt-180 pb-180 lg-mt-110 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="title-style-nine">
                <h2 className="main-title text-white">
                  Any <span>Questions?</span> Find here.
                </h2>
              </div>
              {/* /.title-style-nine */}
              <p className="text-white opacity-75 fs-18 mb-40 mt-30 pe-xxl-5">
                Don’t find your answer here? just send us a message for any
                query.
              </p>
              <Link href="/contact" className="btn-seventeen fw-500 tran3s">
                Contact us
              </Link>
            </div>
            {/* End .col */}
            <div className="col-xxl-6 col-lg-7 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
        <div className="shapes shape-one rounded-circle" />
      </div>

      {/*
        =====================================================
        Blog Section Four
        =====================================================
        */}
      <div className="blog-section-four position-relative">
        <div className="container">
          <div
            className="title-style-nine text-center mb-40 lg-mb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title text-white">
               Partners <span>Portfolio</span>
            </h2>
          </div>
          {/* /.title-style-nine */}
          <div className="row gx-xxl-5">
            <Blog />
          </div>
          {/* /.row */}

          <div className="text-center mt-65 md-mt-30" data-aos="fade-up">
            <div className="d-inline-block zn2 fs-20 text-white position-relative learn-more-btn">
              Want learn more?
              <Link href="/blog/blog-v2" className="fw-500">
                Go to blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*
			=====================================================
				Fancy Short Banner Eleven
			=====================================================
			*/}
      <div className="fancy-short-banner-eleven position-relative zn2 pt-130 pb-170 lg-pb-130">
        <div className="container">
          <div className="row">
            <CallToAction />
          </div>
        </div>
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-eight theme-basic-footer">
        <div className="top-footer zn2 position-relative">
          <img
            src="/images/shape/shape_107.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <Footer />
                <div className="col-md-3 col-sm-6 mb-30 text-white">
                <h5 className="footer-title text-white fw-500">Our Address</h5>
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
        </div>
        {/* /.top-footer */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
      </div>
    </div>
    // main-page-wrapper
  );
};

export default crypto;
