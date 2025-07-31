import Seo from "../../components/common/Seo";
import Hero from "../../components/home-page/home-2/Hero";
import Partner from "../../components/home-page/home-2/Partner";
import Pricing from "../../components/home-page/home-2/Pricing";
import Header2 from "../../components/header/Header2";
import FancyBanner from "../../components/home-page/home-2/FancyBanner";
import FancyBlock from "../../components/home-page/home-2/FancyBlock";
import IncludedPlan from "../../components/home-page/home-2/IncludedPlan";
import Subscribe from "../../components/home-page/home-13/Subscribe";
import Faq from "../../components/home-page/home-5/Faq";
import FooterContent from "../../components/home-page/home-13/FooterContent";
import Link from "next/link";
import CopyrightFooter from "../../components/home-page/home-13/CopyrightFooter";


const RealEstate = () => {
  return (
    <>
      <Seo pageTitle="Real Estate" />

      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header2 />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />

      {/* 
			=============================================
				Partner Section Four
			============================================== 
			*/}
      <div className="partner-section-four position-relative pt-100 sm-pt-70">
        <div className="wrapper m-auto">
          <div className="partner_slider_one row">
            <Partner />
          </div>
        </div>
        {/* /.wrapper */}
      </div>
      {/* 
			=============================================
				Pricing Section Four
			============================================== 
			*/}
        <div className="pricing-section-four pt-170 lg-pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 col-md-9 m-auto">
                <div
                  className="title-style-seven text-center"
                  data-aos="fade-up"
                >
                  <h2 className="main-title fw-bold tx-dark">
                    Gak perlu bisa ngoding, Kami siap bikin website kamu No. 1 di
                    <span className="position-relative d-inline-block">
                      Google 
                      <img src="/images/shape/shape_96.svg" alt="shape" />
                    </span>
                    
                  </h2>
                </div>
                {/* /.title-style-seven */}
              </div>
            </div>
          </div>
          {/* End .container */}

          <div className="wrapper pricing-table-area-four m-auto pt-80 lg-pt-30">
            <div className="row">
              <Pricing />
            </div>
          </div>
          {/* /.pricing-table-area-four */}

          <div className="container">
            <div className="text-center mt-100 lg-mt-50 " data-aos="fade-up">
              <div className="d-inline-block consult-text fs-18 fw-500 tx-dark">
                masih bingung pilih yang mana untuk bisnis kamu? kami bisa bantu.  
                <span> </span><a href="#" className="fw-normal text-decoration-underline">
                Konsultasi Gratis!
                </a>
                <div></div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.pricing-section-four */}
        {/* 
			=============================================
				Feature Section Twenty Three
			============================================== 
			*/}
        <div className="fancy-feature-twentyThree mt-180 lg-mt-100">
          <div className="container">
            <div
              className="title-style-seven text-center pb-20"
              data-aos="fade-up"
            >
              <h2 className="main-title fw-bold tx-dark">
                All Included
                <span className="position-relative d-inline-block">
                  Plan
                  <img src="/images/shape/shape_97.svg" alt="illustration" />
                </span>
              </h2>
            </div>
            {/* /.title-style-seven */}
            <div className="row gx-xl-5">
              <IncludedPlan />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-twentyThree */}
       {/* 
			=============================================
				Feature Section Twenty Four
			============================================== 
			*/}
        <FancyBanner />
        {/* /.fancy-feature-twentyFour */}
        {/* 
			=============================================
				Feature Section Twenty Three
			============================================== 
			*/}
        <div className="fancy-feature-twentyThree mt-35">
          <div className="container">
            <div className="border-top">
              <div className="row gx-xxl-5">
                <FancyBlock />
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-twentyThree */}

      {/* 
			=============================================
				Feature Section Fifty
			============================================== 
			*/}
      <div className="fancy-feature-fifty position-relative mt-200 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-five">
                <h2 className="main-title fw-500 tx-dark">
                  Question &amp; Answers.
                </h2>
              </div>
              {/* /.title-style-five */}
              <p className="text-lg mt-40 mb-45 lg-mt-20 lg-mb-30">
                Don’t find your answer here? just send us a message for help
              </p>
              <Link href="/faq" className="btn-one fw-500">
                See More
              </Link>
            </div>
            {/* End .col */}

            <div className="col-xl-7 col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" data-aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let’s Talk{" "}
                    <img src="/images/shape/shape_132.svg" alt="shape" />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s wow fadeInUp"
                data-aos-delay="300"
                data-aos="fade-up"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>
      {/* /.fancy-short-banner-twelve */}
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

export default RealEstate;
