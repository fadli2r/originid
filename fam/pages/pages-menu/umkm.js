import Link from "next/link";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-8/Header";
import ShapeGroup from "../../components/home-page/home-8/ShapeGroup-2";
import CallToAction from "../../components/home-page/home-8/CallToAction";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer from "../../components/home-page/home-8/Footer";
import Pricing4 from "../../components/pricing/Pricing4";

import Image from "next/image";

const crypto = () => {
  return (
    <div className="dark-bg-one">
      <ShapeGroup />

      <Seo pageTitle="Crypto" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />

      
      
      {/* 
        =============================================
        Feature Section Twenty Six
        ============================================== 
        */}
      <div className="fancy-feature-twentySix position-relative zn2 pt-70 lg-pt-80">
        
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
          {/*
		=====================================================
		Pricing Section One
		=====================================================
		*/}
      <div className="pricing-section-one position-relative">
        <div className="container text-white title-style-nine">
          <Pricing4 />
          {/* /.pricing-table-area-one */}
        </div>
        {/* End container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_40.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.pricing-section-one */}
          
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
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
