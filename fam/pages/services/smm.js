import Link from "next/link";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
// import Leads from "../../components/home-page/home-13/Leads";
import Faq from "../../components/home-page/home-13/Faq";
import Testimonial from "../../components/home-page/home-13/Testimonial";
import FooterContent from "../../components/home-page/home-13/FooterContent";
import Subscribe from "../../components/home-page/home-13/Subscribe";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Service1 from "../../components/services/Service1";
import Pricing from "../../components/pricing/Pricing";



const ServiceV3 = () => {
  return (
    <>
      <Seo pageTitle="Social Media Marketing" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Thirty One
        ============================================== 
        */}
      <div className="fancy-feature-thirtyOne position-relative bg-white zn2 pt-225 pb-140 lg-pt-200 lg-pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                <span className="position-relative">
                    {" "}
                    Social 
                    <img src="/images/shape/shape_122.svg" alt="icon shape" />
                  </span>
                  <span> </span>
                  Media
                  
                  Marketing
                </h2>
                <p className="fs-20 mt-20">
                Kami memiliki jasa Social Media Engangement yang bisa membantu branding bisnis agar lebih diminati dan menarik untuk dilihat oleh customer. 
                dengan begitu akan meningkatkan brand awareness mu yang bisa mendapatkan exposure lebih tinggi dengan menaikkan kualitas Branding Social Media bisnis mu. 
                </p>
              </div>
              {/* /.title-style-ten */}
            </div>
          </div>
          {/* End .row */}
          <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
          <h2 className="main-title font-recoleta fw-normal tx-dark">
            gk punya skill marketing?                
            <span> </span>
                <span className="position-relative">
                    {" "}
                    Beres
                    <img src="/images/shape/shape_122.svg" alt="icon shape" />
                  </span>
                  
                </h2></div>
          <div className="row gx-xxl-5">
            <Service1 />
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_124.svg"
          alt="icon shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_125.svg"
          alt="icon shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-thirtyOne */}

      {/* 
			=============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">Harus banget pake SMM?</div>
                  <h2 className="main-title fw-500 tx-dark">
                  Apa Keuntungan SMM bagi bisnis Anda?
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Social Marketing sangat berguna untuk meningkatkan branding dan Engangement bisnis Anda.
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link href="/page-menu/about-us-v1" className="fw-500 tran3s">
                    More About solution
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.partner-section-six */}
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
                  Tidak ada perubahan?<span>Garansi</span> uang kembali 100%.
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
				Feedback Section Ten
			============================================== 
			*/}
      <div
        className="feedback-section-ten position-relative zn2 pt-110 pb-170 mt-200 lg-mt-120 lg-pt-80 lg-pb-100"
        style={{ background: "#FAFAFA" }}
      >
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title">Bagaimana</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    Layanan
                    <span className="position-relative">
                    {" "}SMM di{" "}
                       <img src="/images/shape/shape_129.svg" alt="" />
                    </span>
                    Famous?
                  </h2>
                </div>
                {/* /.title-style-ten */}
              </div>
            </div>
            {/* End .row */}
            <Testimonial />
          </div>
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_130.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_131.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.feedback-section-ten */}

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
                Ingin Tingkatkan penjualan?<br />
                  <span className="position-relative">
                    Hubungi kami!{" "}
                    <img src="/images/shape/shape_132.svg" alt="shape" />
                  </span>
                
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Kami akan bantu bisnis Anda mendapatkan exposure lebih banyak dan penjualan yang naik setiap bulannya.
              </p>
              <Link
                href="https://wa.me/628113651127/?text=Halo%20Min.%20Saya%20tertarik%20menggunakan%20layanan%20SMM%2C%20boleh%20dibantu%3F"
                className="btn-twenty fw-500 tran3s wow fadeInUp"
                data-aos-delay="300"
                data-aos="fade-up"
                target="_blank"
              >
                Hubungi disini
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

export default ServiceV3;
