import Link from "next/link";
import Seo from "../../components/common/Seo";
import Contact from "../../components/home-page/home-11/Contact";
import Counter from "../../components/home-page/home-11/Counter";
import FancyFeatures from "../../components/home-page/home-11/FancyFeatures";
import Header from "../../components/home-page/home-11/Header";
import Hero from "../../components/home-page/home-11/Hero";
import TagList from "../../components/home-page/home-6/TagList";
import Services2 from "../../components/home-page/home-11/Services";
import Testimonial from "../../components/home-page/home-11/Testimonial";
import Pricing from "../../components/pricing/Pricing-dm";
import Blog from "../../components/home-page/home-11/Blog";
import CallToActions from "../../components/home-page/home-11/CallToActions";
import Social from "../../components/home-page/home-11/Social";
import Footer from "../../components/home-page/home-11/Footer";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";


const SeoAgency = () => {
  return (
    <>
      <Seo pageTitle="Digital Marketing Agency" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}

      {/* 
			=============================================
				Theme Hero Banner
			============================================== 
			*/}
      <div className="hero-banner-six position-relative pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <Hero />
              {/* /.subscribe-form */}
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder text-center mt-45"
            data-aos="fade-up"
          >
            <div className="d-lg-block">
              <img
                src="/images/assets/ils_02.svg"
                alt="shape"
                className="lazy-img m-auto"
              />
            </div>
          </div>
          {/* End .illustration-holder */}
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_85.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
        <div className="shapes shape-six rounded-circle" />
        <div className="shapes shape-seven rounded-circle" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-nine"
        />
      </div>
      {/* /.hero-banner-six */}

      {/* 
        =============================================
        Feature Section Five
        ============================================== 
        */}
      <div className="fancy-feature-five pt-300 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 order-md-last ms-auto">
              <div
                className="block-style-two pe-xxl-5 sm-mb-50"
                data-aos="fade-left"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    lebih dari 
                    <span
                      className="text-decoration-underline"
                      style={{ color: "#FF7B5E" }}
                    >
                      ..30+ Brand
                    </span>
                  </div>
                  <h2 className="main-title fw-500">
                    
                    <span className="d-inline-block position-relative">
                       Keuntungan
                      <span
                        className="mark-bg"
                        style={{ backgroundColor: "#D8FFE8" }}
                      />
                    </span>
                    Digital Marketing di Famous?
                  </h2>
                </div>
                {/* /.title-style-three */}
                <p className="text-lg mt-40 mb-75 lg-mt-30 lg-mb-50">
                Originfamous juga memberikan penawaran eklusif bagi bisnis anda untuk menggunakan jasa digital marketing kami.
                </p>
                <Link
                  href="/pages-menu/about-us-v1"
                  className="btn-four fw-500"
                >
                  Try free now
                </Link>
              </div>
              {/* /.block-style-two */}
            </div>
            {/* End .col-lg-5 */}

            <div className="col-md-6 order-md-first" data-data-aos="fade-right">
              <div className="tags-wrapper position-relative">
                <img
                  src="/images/shape/shape_35.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <div className="h3 m0 fw-normal tx-dark">13+</div>
                <p className="text-lg opacity-50 pb-25 lg-pb-10">
                  Reason to choose us
                </p>
                <TagList />
              </div>
            </div>
          </div>
          <div className="wrapper mt-60 lg-mt-10">
          <div className="container">
            <div className="row justify-content-center">
              <Counter />
            </div>
          </div>
        </div>
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Feature Section Twenty One
			============================================== 
			*/}
      <div className="fancy-feature-twentyOne position-relative mt-190 pt-130 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
        <div className="container">
          <div className="row">
            <Services2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
        <img
          src="/images/shape/shape_88.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_89.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
      </div>
      {/* /.fancy-feature-twentyOne */}

      {/*
			=====================================================
			Pricing Section Three
			=====================================================
			*/}
      <div className="pricing-section-three position-relative mt-225 mb-225 lg-mt-140 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-one text-center mb-70 lg-mb-40"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">OUR PRICING </div>
                <h2 className="main-title fw-normal tx-dark m0">
                  Tidak ada perubahan?{"  "}<span>Garansi</span> uang kembali 100%.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>
          {/* End .row */}
          <Pricing />
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>
      {/* /.pricing-section-three */}

      {/* 
			=============================================
				Feature Section Twenty Two
			============================================== 
			*/}
      <div className="fancy-feature-twentyTwo position-relative pt-170 pb-170 lg-pt-80 lg-pb-100">
        <div className="fancy-short-banner-eight">
          <div className="container">
            <Contact />
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-eight */}

        

        <div className="shapes shape-three rounded-circle" />
        <div className="shapes shape-four rounded-circle" />
        <div className="shapes shape-five rounded-circle" />
        <div className="shapes shape-six rounded-circle" />
        <img
          src="/images/shape/shape_92.svg"
          alt="shape"
          className="lazy-img shapes shape-seven"
        />
        <img
          src="/images/shape/shape_93.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
      </div>
      {/* /.fancy-feature-twentyTwo */}

      
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-six theme-basic-footer position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/famous.png" alt="" width={150} />
                  </Link>
                </div>
                
              </div>
              {/* End .col-lg-2 */}

              <Footer />

              <div className="col-md-3 col-sm-6 mb-30 ">
                <h5 className="footer-title tx-black fw-500">Our Address</h5>
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
              {/* End .col-md-3 */}
            </div>
            {/* End .row */}

            <CopyrightFooter2 />
        {/* /.bottom-footer */}
        
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-six */}
    </>
  );
};

export default SeoAgency;
