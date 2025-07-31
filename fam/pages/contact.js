import Link from "next/link";
import Seo from "../components/common/Seo";
import CopyrightFooter2 from "../components/footer/CopyrightFooter2";
import Footer2 from "../components/footer/Footer2";
import NewsLetter from "../components/footer/NewsLetter";
import Header2 from "../components/header/Header2";
import BlockContact3 from "../components/contact/BlockContact3";
import ContactForm3 from "../components/contact/ContactForm3";
import FooterContent from "../components/home-page/home-13/FooterContent";

const ContactV3 = () => {
  return (
    <>
      <Seo pageTitle="Contact v3" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header2 />
      {/* 
			=============================================
				Contact Section Three
			============================================== 
			*/}
      <div className="contact-section-three p-30">
        <div className="address-wrapper zn2 position-relative pt-180 lg-pt-150 mb-150 lg-mb-80">
          <div className="container">
            <div className="title-style-seven text-center" data-aos="fade-up">
              <h2 className="main-title fw-bold tx-dark">
                Kontak{" "}
                <span className="position-relative d-inline-block">
                  Kami <img src="/images/shape/shape_96.svg" alt="shape" />
                </span>
              </h2>
            </div>
            {/* /.title-style-seven */}

            <div className="row">
              <div className="col-xxl-6 col-xl-7 m-auto">
                <p
                  className="mt-45 lg-mt-20 mb-70 lg-mb-30 fs-20 lh-lg text-center"
                  data-aos="fade-up"
                >
                  Jika masih ada pertanyaan bisa langsung hubungi kami. Tim kami 24 jam siap membantu bisnis Anda.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <BlockContact3 />
            </div>
          </div>
          {/* End container */}
        </div>
        {/* /.address-wrapper */}

        <div className="container">
          <div className="row lg-mb-200 mb-100">
            <div className="col-lg-6 m-auto">
              <div
                className="title-style-one text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-500 tx-dark m0">
                  Tulis pertanyaan.
                </h2>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xxl-11 m-auto">
              <div className="form-style-four" data-aos="fade-up">
                <ContactForm3 />
              </div>
              {/* /.form-style-four */}
            </div>
          </div>
        </div>
      </div>
      {/* /.contact-section-three */}
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

export default ContactV3;
